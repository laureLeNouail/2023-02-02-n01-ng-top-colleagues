import {Component, Input} from '@angular/core';
import {Colleague} from "./models/colleague";

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  laure:Colleague = {
    pseudo: "lolo",
    score: 200,
    photo: "women/64"
  }
  lucas:Colleague = {
    pseudo: "lukreator",
    score: 500,
    photo: "men/32"
  }
  eli:Colleague = {
    pseudo: "strifey",
    score: 900,
    photo: "men/2"
  }

  tabCollegues: Colleague[] = [this.laure,this.lucas, this.eli]


}
