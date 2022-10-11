import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './session.html',
  selector: 'form-sess',
  styleUrls: ['./session.css'],
})
export default class FormSession {
  gender = ['male', 'female'];
  @ViewChild('f') f: NgForm;
  subm = false;
  opt = ['Name', 'Email', 'Gender'];
  b: string;

  onSubmit() {
    console.log(this.f);
    sessionStorage.setItem('name', this.f.value.grp1.name);
    sessionStorage.setItem('email', this.f.value.grp1.email);
    sessionStorage.setItem('gender', this.f.value.grp1.gender);
    this.subm = true;
  }
  show(a: string) {
    const dt = sessionStorage.getItem(a.toLowerCase());
    this.b = 'Your ' + a + ' : ' + dt;
  }
}
