import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
      h1 {
        color: dodgerblue;
      }
    `,
  ],
})
export class AppComponent {
  showSecret = false;
  name = 'my-first-app';
  log = [];
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}
