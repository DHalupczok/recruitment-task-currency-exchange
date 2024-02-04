import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'random-picture',
    loadChildren: () =>
      import('./random-picture/random-picture.module').then(
        m => m.RandomPictureModule
      ),
  },
  {
    path: 'currency-exchange',
    loadChildren: () =>
      import('./currency-exchange/currency-exchange.module').then(
        m => m.CurrencyExchangeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
