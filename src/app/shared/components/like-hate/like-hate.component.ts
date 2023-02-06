import {Component, EventEmitter, Input, Output} from '@angular/core';
import {VoteService} from "../../../providers/vote.service";
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {

  @Output() change:EventEmitter<string> = new EventEmitter<string>();

  @Input() isScoreUp:boolean = true;
  @Input() isScoreDown:boolean = true;

  constructor(private buttonSrv:VoteService) {

  }


  aime() {
    this.change.emit("LIKE");
    this.buttonSrv.clickLike(LikeHate.LIKE)
  }

  deteste(){
    this.change.emit("HATE");
    this.buttonSrv.clickHate(LikeHate.HATE)

  }

}
