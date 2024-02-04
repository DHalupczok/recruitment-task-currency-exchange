import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyExchangeRoutingModule } from './currency-exchange-routing.module';
import { CurrencyExchangeFormComponent } from './components/currency-exchange-form/currency-exchange-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CurrencyExchangeFormComponent],
  imports: [CommonModule, CurrencyExchangeRoutingModule, ReactiveFormsModule],
})
export class CurrencyExchangeModule {}
