// @ts-ignore

import {Component, HostListener, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit{

  // @HostListener('window:keydown', ['$event'])
  move(event: KeyboardEvent) {
    const key = event.key.toLowerCase();
    if(key==="w"){
      console.log("dd")
    }
  }

  ngOnInit(): void {
  }
}
