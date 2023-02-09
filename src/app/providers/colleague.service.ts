import { Injectable } from '@angular/core';
import { Colleague } from '../models/colleague';
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Vote} from "../models/vote";
import {LikeHate} from "../models/like-hate";
import {CollegueForm} from "../models/collegue-form";
import {VoteService} from "./vote.service";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor(private http:HttpClient) {
    this.appelApi()
  }

  private subjectColleagues = new Subject<Colleague[]>;

  changeColleagues(){
    return this.subjectColleagues.asObservable();
  }



  appelApi() {
    this.http.get<Colleague[]>('https://dev.cleverapps.io/api/v2/colleagues').subscribe(
      (data:Colleague[]) =>{
        this.subjectColleagues.next(data)

      }
    )
  }

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  postNouveauCollegue(newColleague:CollegueForm){
    this.http.post('https://dev.cleverapps.io/api/v2/colleagues',{
      pseudo: newColleague.pseudo,
      last : newColleague.last,
      first : newColleague.first,
      photo : newColleague.photo,
    }, this.httpOptions).subscribe(()=>{
      this.appelApi();
    })

  }

}
