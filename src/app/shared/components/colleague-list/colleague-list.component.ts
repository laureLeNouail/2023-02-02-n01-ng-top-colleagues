import { Component } from '@angular/core';
import {Colleague} from "../../../models/colleague";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {

  laure:Colleague = {
    pseudo: "lolo",
    score: 200,
    photo: "women/64"
  }
  lucas:Colleague = {
    pseudo: "lukreator",
    score: -940,
    photo: "men/32"
  }
  eli:Colleague = {
    pseudo: "strifey",
    score: 900,
    photo: "men/2"
  }
  joris:Colleague = {
    pseudo: "Jojo",
    score: 2,
    photo: "men/18"
  }
  antoine:Colleague = {
    pseudo: "TavTav",
    score: 651,
    photo: "men/29"
  }

  tabCollegues: Colleague[] = [this.laure,this.lucas, this.eli, this.joris,this.antoine]
}
