import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface RandomPictureJSON {
  provider: string;
  license: string;
  terms: string;
  url: string;
  size: { height: string; width: string };
}
@Injectable()
export class RandomPictureService {
  constructor(private http: HttpClient) {}

  getRandomPictureUrl$(
    height = 500,
    width = 150,
    category: string | undefined
  ) {
    let params = new HttpParams();
    params = params.append('format', 'json');
    params = params.append('height', height);
    params = params.append('width', width);
    if (category) params = params.append('category', category);

    return this.http.get<RandomPictureJSON>(environment.randomPictureApiUrl, {
      params,
    });
  }
}
