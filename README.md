Demo of using Server-Sent Events (SSE) with Nestjs and Angular

An SSE is sent every second with the current time to the Angular app that has a persistent EventSource connection
to the server. A NgRx ComponentStore sets up a connection that updates the store with the time from the server.

Stack: 

Angular
Server-Sent Events
Nestjs
NgRx ComponentStore

References:
https://docs.nestjs.com/techniques/server-sent-events
https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
https://ngrx.io/guide/component-store/effect

To run:
Install deps: `yarn`
Run server: `yarn nx serve api`
Run client: `yarn nx serve client`

Go to `http://localhost:4200`
