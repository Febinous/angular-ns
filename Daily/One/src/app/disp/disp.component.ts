import { Component, Input } from '@angular/core';
import { regData } from '../model/reg.model';
@Component({
  templateUrl: './disp.component.html',
  selector: 'disp',
})
export class disp {
  @Input('data') data: regData;
}
