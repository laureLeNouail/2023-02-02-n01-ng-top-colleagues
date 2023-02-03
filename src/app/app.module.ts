import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {WelcomeModule} from "./pages/welcome/welcome.module";

@NgModule({
  // la liste des composants graphiques
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    WelcomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
