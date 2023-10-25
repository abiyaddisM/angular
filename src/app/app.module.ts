import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadersComponent } from './components/headers/headers.component';
import { ButtonComponent } from './components/button/button.component';
import { PlayerComponent } from './components/player/player.component';
import {Lists} from "./Lists.service";

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    ButtonComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Lists
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
