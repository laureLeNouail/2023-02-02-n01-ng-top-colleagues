import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {WelcomeModule} from "./pages/welcome/welcome.module";
import {CounterComponent} from "./shared/components/counter/counter.component";
import {SharedModule} from "./shared/shared.module";
import {CreateColleagueModule} from "./pages/create-colleague/create-colleague.module";

@NgModule({
  // la liste des composants graphiques
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    WelcomeModule,
    SharedModule,
    CreateColleagueModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
