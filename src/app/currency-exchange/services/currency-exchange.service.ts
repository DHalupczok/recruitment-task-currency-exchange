import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { share, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  CurrencyExchangeForm,
  CurrencyExchangeRate,
  CurrencyExchangeTable,
} from '../Interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyExchangeService {
  constructor(private http: HttpClient) {}

  private getCurrencyExchangeRate(currencyCode: string) {
    return this.http.get<CurrencyExchangeRate>(
      `${environment.nbpApiUrl}exchangerates/rates/C/${currencyCode}`
    );
  }

  availableCurrencyList$() {
    return this.http
      .get<CurrencyExchangeTable>(
        `${environment.nbpApiUrl}exchangerates/tables/C/`
      )
      .pipe(
        share(),
        map(currencies =>
          currencies['0'].rates.map(completeCurrency => {
            const { currency, code, ...rest } = completeCurrency;
            return { currency, code };
          })
        )
      );
  }

  getChangedMoney$({
    operation,
    targetCurrency,
    startMoneyQty,
    startCurrency,
  }: CurrencyExchangeForm) {
    if (targetCurrency === 'PLN') {
      return this.getCurrencyExchangeRate(startCurrency).pipe(
        map(result => {
          const exchangeRate = result.rates['0'][operation];
          return { qty: startMoneyQty * exchangeRate, exchangeRate };
        })
      );
    }
    if (startCurrency === 'PLN') {
      return this.getCurrencyExchangeRate(targetCurrency).pipe(
        map(result => {
          const exchangeRate = result.rates['0'][operation];
          return { qty: startMoneyQty / exchangeRate, exchangeRate };
        })
      );
    }

    return this.getCurrencyExchangeRate(startCurrency).pipe(
      switchMap(startCurrencyToPlnRate =>
        this.getCurrencyExchangeRate(targetCurrency).pipe(
          map(targetCurrencyToPlnRate => {
            const oppositeOperation = operation === 'ask' ? 'bid' : 'ask';
            const startToPlnRate = startCurrencyToPlnRate.rates['0'][operation];
            const plnToTargetRate =
              targetCurrencyToPlnRate.rates['0'][oppositeOperation];
            const qtyOfPln = startMoneyQty * startToPlnRate;
            const qty = qtyOfPln / plnToTargetRate;
            return { qty, exchangeRate: startToPlnRate / plnToTargetRate };
          })
        )
      )
    );
  }
}
