import { Component } from '@angular/core';

import {Colleague} from "../../../models/colleague";
import {CollegueForm} from "../../../models/collegue-form";

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss'],
})
export class CreateColleagueFormsComponent {
  newColleague:CollegueForm= {
    pseudo:"",
    score : 0,
    photo :"",
    nom:"",
    prenom:""

  };

  submit(){

  }

}
