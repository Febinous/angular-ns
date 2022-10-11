import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-childo',
  templateUrl: './childo.component.html',
  styleUrls: ['./childo.component.css'],
})
export class ChildoComponent implements OnInit {
  @Input('Pnts') Points: { pointOne: string; pointTwo: string };
  constructor() {}

  ngOnInit(): void {}
}
