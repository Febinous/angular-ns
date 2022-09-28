import { Component, Input, OnInit } from '@angular/core';

import { points } from '../cont/points.model';

@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.css'],
})
export class ChildtwoComponent implements OnInit {
  inputOne = 'Hellotest';
  constructor() {}
  @Input('pts') points: any;

  updateP() {}
  ngOnInit(): void {}
}
