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
    photo: "lego/6"
  }
  lucas:Colleague = {
    pseudo: "lukreator",
    score: -940,
    photo: "lego/2"
  }
  eli:Colleague = {
    pseudo: "strifey",
    score: 900,
    photo: "lego/3"
  }
  joris:Colleague = {
    pseudo: "Jojo",
    score: 2,
    photo: "lego/4"
  }
  antoine:Colleague = {
    pseudo: "TavTav",
    score: 651,
    photo: "lego/5"
  }

  tabCollegues: Colleague[] = [this.laure,this.lucas, this.eli, this.joris,this.antoine]
}
