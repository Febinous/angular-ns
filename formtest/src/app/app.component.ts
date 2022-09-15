import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // data = [{ data: 'Hello' }, { data: 'Hello' }];
  data = [
    { dataOne: 'Its Data One', dataTwo: 'Its data Two' },
    { dataOne: 'Its Data One2', dataTwo: 'Its data Two2' },
  ];
  title = 'formtest';
}
