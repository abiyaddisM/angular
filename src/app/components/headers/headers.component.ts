import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit{
  title: string = 'Task tracker';
  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log("dd");
  }
}

