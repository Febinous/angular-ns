import { Component, Input, OnInit } from '@angular/core';
import { points } from './points.model';

@Component({
  selector: 'app-cont',
  templateUrl: './cont.component.html',
  styleUrls: ['./cont.component.css'],
})
export class ContComponent implements OnInit {
  // points: points[] = [
  //   new points('One', 'Point One'),
  //   new points('Two', 'Point Two'),
  // ];

  @Input() cData: { dataOne: string; dataTwo: string };
  // cData = { dataOne: 'hello', dataTwo: 'hello2' };
  constructor() {}

  ngOnInit(): void {}
}
