import { Component } from '@angular/core';
import { TimeSseStore } from './time-sse.store';
import { tap } from 'rxjs';

@Component({
  selector: 'nest-ng-ngrx-component-store-sse-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly now$ = this.timeSseStore.now$;

  constructor(private timeSseStore: TimeSseStore) {}
}
