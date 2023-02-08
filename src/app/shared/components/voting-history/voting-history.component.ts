import {Component} from '@angular/core';
import {Vote} from "../../../models/vote";
import {LikeHate} from "../../../models/like-hate";
import {VoteService} from "../../../providers/vote.service";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  tabVotes: Vote[] = [];

  hate: LikeHate = LikeHate.HATE;

  constructor(private voteSrv:VoteService) {
    this.voteSrv.chargeApiSubject().subscribe(listeVotes => this.tabVotes = listeVotes);
  }

  suppr(id:number){
    this.tabVotes.splice(id,1);


  }

}
