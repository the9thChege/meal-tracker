import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calorieCount",
  pure: false
})
export class CalorieCounterPipe implements PipeTransform {
  transform(input: Meal[], info) {
    var desiredCalorieCount = info[0];
    var output: Meal[] = [];
    if (desiredCalorieCount === "low-calorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCalorieCount === "high-calorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
