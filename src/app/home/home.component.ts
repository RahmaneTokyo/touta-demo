import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  expand = false;
  opacity = 'opacity-0';

  constructor() { }

  ngOnInit(): void {
  }
}
