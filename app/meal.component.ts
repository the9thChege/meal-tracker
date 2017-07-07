import { Component, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <h4>{{ meal.name }}</h4>
    <p>Meal details: {{ meal.details }}</p>
    <p>Calories: {{ meal.calories }}</p>
    <hr>
    `
})
export class MealComponent {
  public meal: Meal;
}
