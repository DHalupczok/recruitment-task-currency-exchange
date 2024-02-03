import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomPictureModule } from './random-picture/random-picture.module';

const routes: Routes = [
  {
    path: 'random-picture',
    loadChildren: () =>
      import('./random-picture/random-picture.module').then(
        m => m.RandomPictureModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
