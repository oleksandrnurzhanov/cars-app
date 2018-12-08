import * as moment from 'moment';
import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

import {Car} from '../car.model';
import {AppState} from '../redux/app.state';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent {
  public carName: string = '';
  public carModel: string = '';

  constructor(
    private store: Store<AppState>,
    private carsService: CarsService
  ) {
  }

  public onAdd() {
    if (this.carModel === '' || this.carName === '') return;

    const date = moment().format('DD.MM.YY');
    const car: Car = new Car(this.carName, date, this.carModel);

    this.carsService.addCar(car);

    this.carName = '';
    this.carModel = '';
  }

  onLoad() {
    this.carsService.loadCars();
  }
}
