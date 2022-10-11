import { Component, OnInit } from '@angular/core';
import { childtwo } from './childtwo.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  points = ['Hello1', 'Hello2', 'Hello3'];
  // points = [
  //   new childtwo('Point1', 'Point2'),
  //   new childtwo('Point11', 'Point22'),
  // ];
  constructor() {}

  ngOnInit(): void {}
}
