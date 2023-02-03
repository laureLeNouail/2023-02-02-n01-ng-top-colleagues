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
  vincent:Colleague = {
      pseudo: "vens",
      score: 84,
      photo: "lego/3"
    }
    leonelle:Colleague = {
      pseudo: "lele",
      score: 954,
      photo: "lego/7"
    }

    giovanni:Colleague = {
      pseudo: "Gio",
      score: 741,
      photo: "lego/2"
    }

    antoineMM:Colleague = {
      pseudo: "MM",
      score: 852,
      photo: "lego/1"
    }
    antoineL:Colleague = {
      pseudo: "AntoineL",
      score: 84,
      photo: "lego/6"
    }
    abel:Colleague = {
      pseudo: "Abeeeeel",
      score: 65,
      photo: "lego/4"
    }
    sylvere:Colleague = {
      pseudo: "Désinateur",
      score: 857,
      photo: "lego/8"
    }
    Paul:Colleague = {
      pseudo: "luap",
      score: -745,
      photo: "lego/2"
    }
    antoineT:Colleague = {
      pseudo: "TavTav",
      score: 987,
      photo: "lego/3"
    }
    sebastien:Colleague = {
      pseudo: "lateMan",
      score: 1,
      photo: "lego/1"
    }
    matthieu:Colleague = {
      pseudo: "Carbonito",
      score: 1111,
      photo: "lego/7"
    }


  tabCollegues: Colleague[] = [this.laure,this.lucas, this.eli, this.joris,this.vincent,this.leonelle,this.giovanni,this.antoineMM,this.antoineL, this.abel,this.sylvere, this.Paul, this.antoineT, this.sebastien, this.matthieu]
}
