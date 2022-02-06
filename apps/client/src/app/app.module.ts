import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimeSseStore } from './time-sse.store';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [TimeSseStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
