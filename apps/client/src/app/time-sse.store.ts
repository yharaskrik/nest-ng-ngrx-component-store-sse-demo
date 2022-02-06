import { Injectable, NgZone } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, Subject } from 'rxjs';

function eventSourceToObservable(
  source: string,
  _ngZone: NgZone
): Observable<{ now: string }> {
  /*
   * Set up a Subject we will use as a pass through for the EventSource that is listening to SSE to emit
   * to the NgRx ComponentStore effect
   */
  const passThrough = new Subject<{ now: string }>();

  /*
   * The EventSource that opens a persistent connection to the server to listen for Server Sent Events (Sse)
   */
  const eventSource = new EventSource(`/api/${source}`);

  eventSource.onmessage = (e) =>
    /*
     * Need to run the `subject.next` inside of Zone so that Angular knows it has occurred and can make sure that the
     * UI is updated. Unsure of how this works with zoneless applications.
     *
     * Reference: https://blog.octo.com/en/angular-2-sse-and-changes-detection/
     */
    _ngZone.run(() => passThrough.next(JSON.parse(e.data)));

  return passThrough;
}

export interface TimeSseState {
  now: string;
}

@Injectable()
export class TimeSseStore extends ComponentStore<TimeSseState> {
  readonly now$ = this.select((state) => state.now);

  readonly setNow = this.updater((state, now: string) => ({ ...state, now }));

  constructor(private _ngZone: NgZone) {
    super({ now: new Date().toISOString() });
  }

  /*
   * An NgRx ComponentStore effect that will listen on our PassThrough EventSource and update the state with the
   * date sent from the server.
   */
  readonly getTime$ = this.effect(() =>
    eventSourceToObservable('time', this._ngZone).pipe(
      tapResponse(
        (data) => {
          this.setNow(data.now);
        },
        (error) => console.error(error)
      )
    )
  );
}
