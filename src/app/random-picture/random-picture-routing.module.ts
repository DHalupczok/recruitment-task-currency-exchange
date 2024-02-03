import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomPictureComponent } from './components/random-picture/random-picture.component';

const routes: Routes = [{ path: '', component: RandomPictureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomPictureRoutingModule {}
