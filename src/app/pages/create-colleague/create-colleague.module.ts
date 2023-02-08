import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateColleaguePage } from './create-colleague.page';
import {
  CreateColleagueFormsComponent
} from "../../shared/components/create-colleague-forms/create-colleague-forms.component";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CreateColleaguePage
  ],
  exports: [
    CreateColleaguePage
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CreateColleagueModule { }
