import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { disp } from './disp/disp.component';

import { registration } from './registration.component/registration.component';
import { FormsComponent } from './forms/forms.component';
@NgModule({
  declarations: [AppComponent, registration, disp, FormsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
