import { Controller, Sse } from '@nestjs/common';
import { interval, map } from 'rxjs';

@Controller()
export class AppController {
  /*
   * A simple Sse endpoint to emit the current time.
   */
  @Sse('time')
  getData() {
    /*
     * This can be any observable, you could swap it out for a WebSocket connection to your favorite API
     * or some other Observable that emits data from any source you choose.
     */
    return interval(1000).pipe(map(() => ({ data: { now: new Date() } })));
  }
}
