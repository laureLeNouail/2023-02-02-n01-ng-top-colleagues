import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";
import {Vote} from "../models/vote";
import {LikeHate} from "../models/like-hate";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  constructor() { }

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


  vote1:Vote ={
    colleague: this.joris,
    vote : LikeHate.HATE
  }
  vote2:Vote ={
    colleague: this.laure,
    vote : LikeHate.LIKE
  }
  vote3:Vote ={
    colleague: this.lucas,
    vote : LikeHate.LIKE
  }
  vote4:Vote ={
    colleague: this.joris,
    vote : LikeHate.HATE
  }

  listVotes: Vote[] = [this.vote1,this.vote2,this.vote3,this.vote4]

  list(): Vote[]{
    return this.listVotes;

  }

  private subjectNbLike = new Subject<LikeHate>;
  private subjectNbHate = new Subject<LikeHate>;

  countLike(){
    return this.subjectNbLike.asObservable();
  }
  countHate(){
    return this.subjectNbHate.asObservable();
  }

  clickLike(data:LikeHate){
    this.subjectNbLike.next(data)
  }

  clickHate(data:LikeHate){
    this.subjectNbHate.next(data)
  }


}
