import { Component, OnInit } from '@angular/core';
import { CurrencyExchangeService } from '../../services/currency-exchange.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CompleteCurrency, operation } from '../../Interface';
import { iif, of, switchMap } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-currency-exchange-form',
  templateUrl: './currency-exchange-form.component.html',
  styleUrls: ['./currency-exchange-form.component.scss'],
})
export class CurrencyExchangeFormComponent implements OnInit {
  private currencyMismatchValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const startCurrency = control.get('startCurrency')?.value;
    const targetCurrency = control.get('targetCurrency')?.value;

    if (startCurrency && targetCurrency && startCurrency === targetCurrency) {
      return { currencyMismatch: true };
    }

    return null;
  };

  availableCurrencyList$ =
    this.currencyExchangeService.availableCurrencyList$();
  form = new FormGroup(
    {
      operation: new FormControl<'bid' | 'ask'>('ask'),
      startCurrency: new FormControl('', {
        validators: [Validators.required],
      }),
      startMoneyQty: new FormControl(0, { validators: [Validators.min(1)] }),
      targetCurrency: new FormControl('', {
        validators: [Validators.required],
      }),
    },
    { validators: [this.currencyMismatchValidator] }
  );
  moneyExchangeResult = this.form.valueChanges.pipe(
    switchMap(formValue =>
      iif(
        () => this.form.valid,
        of(formValue).pipe(
          switchMap(newFormValue => {
            const operation = newFormValue.operation as operation;
            const startCurrency = newFormValue.startCurrency as string;
            const startMoneyQty = newFormValue.startMoneyQty as number;
            const targetCurrency = newFormValue.targetCurrency as string;
            return this.currencyExchangeService.getChangedMoney$({
              operation,
              targetCurrency,
              startMoneyQty,
              startCurrency,
            });
          })
        ),
        of(null)
      )
    )
  );

  constructor(private currencyExchangeService: CurrencyExchangeService) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe(newValue => {
      if (this.form.valid) console.warn(newValue);
    });
  }

  trackByCurrencyCode(
    _: number,
    providedCurrency: Pick<CompleteCurrency, 'code' | 'currency'>
  ) {
    return providedCurrency.code;
  }
}
