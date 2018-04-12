import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Restaurant } from './../../models/restaurant.model';

import { MEAT_API } from './../../app.api';
import { ErrorHandler } from './../../app.error-handler';

@Injectable()
export class RestaurantService {

  rests: Restaurant[] = [];

  constructor(private http: Http) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }
}

