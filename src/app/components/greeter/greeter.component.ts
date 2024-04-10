import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.scss']
})
export class GreeterComponent implements OnInit {

  name: string = 'KHalil ziadeh';

  constructor() { }

  ngOnInit(): void {
  }

}
