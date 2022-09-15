import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'emit';
  name = [{ name: 'Name' }];
  updateName(data: { name: string }) {
    this.name.push({ name: data.name });
  }
  delete(i: number) {
    this.name.splice(i, 1);
  }
}
