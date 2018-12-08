import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppState} from './redux/app.state';
import {Store} from '@ngrx/store';
import {AddCar, DelCar, LoadCars, UpdateCar} from './redux/cars.action';
import {Car, Cars} from './car.model';
import {Observable} from 'rxjs';

@Injectable()
export class CarsService {
  static BASE_URL: string = 'http://localhost:3000/';
  static CARS_URL: string = `${CarsService.BASE_URL}cars`;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) {
  }

  preloadCars(): Observable<any> {
    return this.http
      .get(CarsService.CARS_URL);
  }

  loadCars(): void {
    this.preloadCars()
      .subscribe((cars: Car[]) => this.store.dispatch(new LoadCars(cars)));
  }

  addCar(car: Car): void {
    this.http
      .post<Car>(CarsService.CARS_URL, car)
      .subscribe((car: Car) => this.store.dispatch(new AddCar(car)))
  }

  deleteCar(car: Car): void {
    this.http
      .delete(`${CarsService.CARS_URL}/${car.id}`)
      .subscribe(() => this.store.dispatch(new DelCar(car)));
  }

  buyCar(car: Car): void {
    this.http
      .put<Car>(`${CarsService.CARS_URL}/${car.id}`, car)
      .subscribe(() => this.store.dispatch(new UpdateCar(car)))
  }
}
