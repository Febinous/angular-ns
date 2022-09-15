import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  homeData = [{ pointOne: 'Point Is at one', pointTwo: 'Point is at two' }];
}
