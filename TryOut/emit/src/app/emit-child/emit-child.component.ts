import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-emit-child',
  templateUrl: './emit-child.component.html',
  styleUrls: ['./emit-child.component.css'],
})
export class EmitChildComponent implements OnInit {
  fname = '';
  war = '';
  @Output() updateEvent = new EventEmitter<{ name: string }>();
  constructor() {}
  nameUpdate() {
    if (this.fname === '') {
      this.war = 'Enter some value';
    } else {
      this.updateEvent.emit({ name: this.fname });
      this.fname = '';
      this.war = '';
    }
  }

  ngOnInit(): void {}
}
