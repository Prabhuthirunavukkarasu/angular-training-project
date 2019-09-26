import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value < 5) return value + "/10 (Poor)";
    else if (value >= 5 && value <= 7) return value + "/10 (Average)";
    else if (value > 7 && value <= 9) return value + "/10 (Good)";
    else if (value > 9) return value + "/10 (Excellent)";
  }

}
