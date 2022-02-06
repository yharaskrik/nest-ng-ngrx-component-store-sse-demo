Demo of using Server-Sent Events (SSE) with Nestjs and Angular

An SSE is sent every second with the current time to the Angular app that has a persistent EventSource connection
to the server. A NgRx ComponentStore sets up a connection that updates the store with the time from the server.

Stack: 

1. Angular
2. Server-Sent Events
3. Nestjs
4. NgRx ComponentStore

References:
1. https://docs.nestjs.com/techniques/server-sent-events
2. https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
3. https://ngrx.io/guide/component-store/effect

To run:
1. Install deps: `yarn`
2. Run server: `yarn nx serve api`
3. Run client: `yarn nx serve client`

Go to `http://localhost:4200`
