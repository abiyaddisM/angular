import { Component } from '@angular/core';
import {Lists} from "./Lists.service";

@Component({
  selector: 'app-root',
  template:`
  <app-headers></app-headers>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="List";
  lists=["one","two","three"];
  constructor(value:Lists) {
    this.lists=value.names;
  }
}
