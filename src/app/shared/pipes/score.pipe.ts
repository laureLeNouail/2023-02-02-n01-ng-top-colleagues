import { Pipe, PipeTransform } from '@angular/core';
import {reportUnhandledError} from "rxjs/internal/util/reportUnhandledError";

@Pipe({
  name: 'ScorePipe'
})
export class ScorePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]):string {
    if(value > 0){
      return "+ "+value;
    }else if(value == 0){
      return value.toString();
    }
    else {
      return "-  " + value*-1;
    }
  }

}
