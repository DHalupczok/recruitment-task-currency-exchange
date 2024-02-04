import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyExchangeFormComponent } from './components/currency-exchange-form/currency-exchange-form.component';

const routes: Routes = [{ path: '', component: CurrencyExchangeFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrencyExchangeRoutingModule {}
