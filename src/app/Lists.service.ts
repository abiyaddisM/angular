import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Lists {

  constructor() { }
  get names(){
    return["one","two","three"];
  }
}
