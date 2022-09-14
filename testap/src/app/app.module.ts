import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContComponent } from './cont/cont.component';
import { ChildComponent } from './child/child.component';
import { ChildtwoComponent } from './childtwo/childtwo.component';

@NgModule({
  declarations: [
    AppComponent,
    ContComponent,
    ChildComponent,
    ChildtwoComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
