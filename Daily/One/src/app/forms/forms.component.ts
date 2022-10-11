import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  @ViewChild('f') signup: NgForm;
  genders = ['male', 'female'];
  constructor() {}
  defaultQuestion = 'teacher';
  submitted = false;
  answer = '';
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  ngOnInit(): void {}
  onSubmit() {
    // console.log(this.signup);
    this.submitted = true;
    this.user.username = this.signup.value.userData.fname;
    this.user.email = this.signup.value.userData.email;
    this.user.secretQuestion = this.signup.value.userData.secret;
    this.user.answer = this.signup.value.userData.questionAnswer;
    this.user.gender = this.signup.value.userData.gender;
    this.signup.reset();
  }
  setAll() {
    // this.signup.setValue({
    //   userData: {
    //     fname: 'setName',
    //     email: 'setMail@gmail.com',
    //     secret: 'pet',
    //     questionAnswer: '',
    //     gender: 'male',
    //   },
    // });
    // whole value
    this.signup.form.patchValue({
      userData: {
        fname: 'hello',
      },
    });
  }
}
