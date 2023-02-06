import {Component, Input} from '@angular/core';
import {Vote} from "../../../models/vote";
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";
import {VoteService} from "../../../providers/vote.service";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  tabVotes: Vote[] = [];

  constructor(private voteSrv:VoteService) {
    this.tabVotes = this.voteSrv.list();
  }

  suppr(id:number){
    this.tabVotes.splice(id,1);


  }

}
