import { Component } from '@angular/core';
import { regData } from './model/reg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Registrations';
  data: regData;
  rog = true;
  getData(data: regData) {
    this.rog = false;
    this.data = data;
  }
}
