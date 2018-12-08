import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

import {CAR_ACTION} from './cars.action';
import {Car} from '../car.model';
import {CarsService} from '../cars.service';

@Injectable()
export class CarsEffect {
  constructor(
    private actions$: Actions,
    private carsService: CarsService,
  ) {
  }

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(CAR_ACTION.ADD_CAR),
    mergeMap(() =>
      this.carsService.preloadCars().pipe(
        map((cars: Car[]) => ({type: CAR_ACTION.LOAD_CARS, payload: cars})),
      )
    ));
}
