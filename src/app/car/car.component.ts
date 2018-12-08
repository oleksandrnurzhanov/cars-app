import {Component, Input} from '@angular/core';
import {Car} from '../car.model';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input() car: Car;

  constructor(
    private carsService: CarsService,
  ) {
  }

  public onDelete() {
    this.carsService.deleteCar(this.car);
  }

  public onBuy() {
    this.car.isSold = true;
    this.carsService.buyCar(this.car);
  }
}
