import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {ScorePipe} from "../../pipes/score.pipe";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss'],
})
export class ColleagueComponent {

  @Input() pseudo:string = "";
  @Input() score: number = 0;
  @Input() photo: string = "";

  isScoreUp = false;
  isScoreDown = false;

  traitementLikeAndHate(val:string){
    if (val == "LIKE"){
      if(this.score >= 1000){
        this.isScoreUp = true;
        this.isScoreDown = false;
      }else{
        this.score = this.score + 10;
        this.isScoreUp = false;
        this.isScoreDown = false;

      }

    }else if(val == "HATE"){
      if(this.score <= -1000){
        this.isScoreDown = true;
        this.isScoreUp = false;

      }else{
        this.score = this.score - 10;
        this.isScoreDown = false;
        this.isScoreUp = false;

      }
    }

  }


}
