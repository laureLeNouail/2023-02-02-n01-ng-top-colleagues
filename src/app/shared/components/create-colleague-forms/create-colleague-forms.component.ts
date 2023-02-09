import { Component } from '@angular/core';

import {Colleague} from "../../../models/colleague";
import {CollegueForm} from "../../../models/collegue-form";
import {ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss'],
})
export class CreateColleagueFormsComponent {
  newColleague:CollegueForm= {
    pseudo:"",
    photo :"",
    last:"",
    first:""

  };

  constructor(private collSrv:ColleagueService) {
  }

  submit(){

    this.collSrv.postNouveauCollegue(this.newColleague);

    this.newColleague = {
      pseudo:"",
      photo :"",
      last:"",
      first:""

    };

  }

}
