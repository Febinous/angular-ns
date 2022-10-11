import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { logiComponent } from './logi/logi.component';
import { ServersComponent } from './servers/servers.component';
import { redcomponent } from './redwar/red.component';
import { GreenComponent } from './green/green.component';
import { assn } from './assone/assn.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    logiComponent,
    ServersComponent,
    redcomponent,
    GreenComponent,
    assn,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
