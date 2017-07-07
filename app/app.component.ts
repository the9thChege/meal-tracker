import {Component, EventEmitter} from '@angular/core';
import {Meal} from './meal.model'
import {MealListComponent} from './meal-list.component'

@Component({
  selector: 'my-app',
  template:`
    <div class="container">
      <h1>Meal Tracker</h1>
      <hr>
        <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)"
        ></meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
    new Meal("Example Meal Name", "Your meal description here...", 200),
  ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}
