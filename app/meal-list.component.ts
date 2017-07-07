import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';
import { CalorieCounterPipe } from './calorify.pipe';

@Component({
  selector: 'meal-list',
  template: `
  <new-meal (onSubmitNewMeal)="createMeal($event)">
  </new-meal>
  <hr>

  <div class="form-group">
    <label for="meal-filter">Filter your meals by calorie count:</label>
    <select id="meal-filter" class="form-control" (change)="onChange($event.target.value)">
      <option value="all" selected="selected">Show All Meals</option>
      <option value="high-calorie">Show High Calorie Meals (More than 500 calories)</option>
      <option value="low-calorie">Show Low Calorie Meals (Less than 500 calories)</option>
    </select>
  </div>

  <meal-display *ngFor="#currentMeal of mealList | calorieCount:selectedCalorieCount" (click)="mealClicked(currentMeal)"
  [meal] = "currentMeal"
  [class.high-calorie]="currentMeal.calories >= 500"
  [class.low-calorie]="currentMeal.calories < 500">
  </meal-display>

  <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal">
  </edit-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public selectedCalorieCount: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: string[]): void {
    this.mealList.push(
      new Meal(newMeal[0], newMeal[1], parseFloat(newMeal[2]))
    );
  }
  onChange(optionFromMenu) {
    this.selectedCalorieCount = optionFromMenu;
  }
}
