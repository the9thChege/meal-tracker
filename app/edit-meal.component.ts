import { Component } from '@angular/core'
import { Meal } from './meal.model'

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
  <div class="meal-form">
    <h3>Edit this entry:</h3>
    <label class="sr-only" for="edit-name">Edit Meal name</label>
    <input id="edit-name" [(ngModel)]="meal.name" class="input-lg meal-form"/>

    <label class="sr-only" for="edit-details">Edit Meal description</label>
    <input id="edit-details" [(ngModel)]="meal.details" class="input-lg meal-form"/>

    <label class="sr-only" for="edit-calories">Edit Meal calories</label>
    <input id="edit-calories "[(ngModel)]="meal.calories" class="input-lg meal-form"/>
  </div>
  `
})

export class EditMealComponent {
  public meal: Meal;
}
