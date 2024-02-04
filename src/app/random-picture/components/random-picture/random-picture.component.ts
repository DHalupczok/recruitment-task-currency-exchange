import { Component, OnInit } from '@angular/core';
import { RandomPictureService } from '../../services/random-picture.service';
import { catchError, interval, startWith, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-random-picture',
  templateUrl: './random-picture.component.html',
  styleUrls: ['./random-picture.component.scss'],
})
export class RandomPictureComponent implements OnInit {
  constructor(private randomPictureService: RandomPictureService) {}
  pictureUrl$ = interval(environment.pictureInterval).pipe(
    startWith(0),
    switchMap(() =>
      this.randomPictureService.getRandomPictureUrl$(500, 1500, '')
    ),
    map(res => res.url),
    catchError(err => {
      console.warn(err);
      return '';
    })
  );
  ngOnInit(): void {}
}
