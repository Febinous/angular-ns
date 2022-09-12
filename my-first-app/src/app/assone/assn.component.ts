import { Component } from '@angular/core';

@Component({
  selector: 'assn',
  templateUrl: './ass.component.html',
})
export class assn {
  userName = '';
  isEmpty = true;
  clear() {
    this.userName = '';
  }
}
