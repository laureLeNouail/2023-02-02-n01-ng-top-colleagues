import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {

  @Input() pseudo:string = "";
  @Input() score: number = 0;
  @Input() photo: string = "";

  traitementLikeAndHate(val:string){
    if (val == "LIKE"){
      this.score = this.score + 10;

    }else if(val == "HATE"){
      this.score = this.score - 10;
    }

  }


}
