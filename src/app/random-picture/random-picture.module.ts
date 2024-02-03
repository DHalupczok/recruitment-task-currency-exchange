import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomPictureRoutingModule } from './random-picture-routing.module';
import { RandomPictureComponent } from './components/random-picture/random-picture.component';
import { RandomPictureService } from './services/random-picture.service';

@NgModule({
  declarations: [RandomPictureComponent],
  imports: [CommonModule, RandomPictureRoutingModule],
  providers: [RandomPictureService],
})
export class RandomPictureModule {}
