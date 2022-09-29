import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { regData } from '../model/reg.model';

@Component({
  selector: 'registration',
  templateUrl: './registration.compoent.html',
  styleUrls: ['./registration.component.css'],
})
export class registration {
  fname: string = '';
  lname: string = '';
  date: string = '';
  gen: string = '';
  pay: string = '';
  address: string = '';
  valid = '';
  @Output() efname = new EventEmitter<regData>();
  @ViewChild('tname', { static: false }) nameRef: ElementRef;
  constructor() {}
  flname: string = 'asdf';
  //   flamer: { a: regData };
  // flamer={}
  onSub() {
    // this.nameRef.nativeElement.value = 'something for nothing';
    if (
      this.fname == '' ||
      this.lname == '' ||
      this.date == '' ||
      this.gen == '' ||
      this.pay == '' ||
      this.address == ''
    ) {
      this.valid = 'Please enter all requiered data !';
    } else {
      this.valid = '';
      this.efname.emit(
        new regData(
          this.fname,
          this.lname,
          this.gen,
          this.pay,
          this.date,
          this.address
        )
      );
    }
  }

  saveData() {
    //sessionstorage
    sessionStorage.setItem('fname', this.fname);
    sessionStorage.setItem('lname', this.lname);
    sessionStorage.setItem('gender', this.gen);
    sessionStorage.setItem('date', this.date);
    sessionStorage.setItem('address', this.address);
    //localstorage
    localStorage.setItem('fname', this.fname);
    localStorage.setItem('lname', this.lname);
    localStorage.setItem('gender', this.gen);
    localStorage.setItem('date', this.date);
    localStorage.setItem('address', this.address);
    //cookie
    document.cookie = 'fname=this.fname';
  }
  clearData() {
    localStorage.clear();
    sessionStorage.clear();
  }
  showData() {
    this.efname.emit(
      new regData(
        (this.fname = sessionStorage.getItem('fname')),
        (this.lname = sessionStorage.getItem('lname')),
        (this.gen = sessionStorage.getItem('gen')),
        (this.pay = sessionStorage.getItem('pay')),
        (this.date = sessionStorage.getItem('date')),
        (this.address = sessionStorage.getItem('address'))
      )
    );
  }
}
