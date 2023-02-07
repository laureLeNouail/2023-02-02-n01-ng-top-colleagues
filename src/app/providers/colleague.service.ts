import { Injectable } from '@angular/core';
import { Colleague } from '../models/colleague';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Vote} from "../models/vote";
import {LikeHate} from "../models/like-hate";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor(private http:HttpClient) {
    this.appelApi()
  }

  private subjectVote = new Subject<Colleague[]>;

  changeColleagues(){
    return this.subjectVote.asObservable();
  }



  appelApi() {
    this.http.get<Colleague[]>('https://dev.cleverapps.io/api/v2/colleagues').subscribe(
      (data:Colleague[]) =>{
        this.subjectVote.next(data)
      }
    )
  }

}
