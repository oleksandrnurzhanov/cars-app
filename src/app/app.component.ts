import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {Cars} from './car.model';
import {AppState} from './redux/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public carState: Observable<Cars>;

  constructor(private store: Store<AppState>) {}

  public ngOnInit() {
    this.carState = this.store.select('carPage');
  }
}
