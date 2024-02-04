export type CompleteCurrency = {
  currency: string;
  code: string;
  bid: number;
  ask: number;
};

export interface CurrencyExchangeTable {
  0: {
    effectiveDate: string;
    no: string;
    rates: CompleteCurrency[];
    table: string;
    tradingDate: string;
  };
}

export interface CurrencyExchangeRate {
  table: string;
  currency: string;
  code: string;
  rates: {
    0: {
      no: string;
      effectiveDate: string;
      bid: number;
      ask: number;
    };
  };
}

export type operation = 'bid' | 'ask';
export interface CurrencyExchangeForm {
  operation: operation;
  startCurrency: string;
  startMoneyQty: number;
  targetCurrency: string;
}
