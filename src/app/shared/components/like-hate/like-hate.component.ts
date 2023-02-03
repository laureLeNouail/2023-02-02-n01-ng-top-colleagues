import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {

  @Output() change:EventEmitter<string> = new EventEmitter<string>();

  @Input() isScoreUp:boolean = true;
  @Input() isScoreDown:boolean = true;

  aime() {
    this.change.emit("LIKE");
  }

  deteste(){
    this.change.emit("HATE");
  }

}
