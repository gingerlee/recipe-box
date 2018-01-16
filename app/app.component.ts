import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  currentRecipe: string = 'New Recipe';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  recipes: Recipe[] = [
    new Recipe('Vegan Lasagna with Cashew Ricotta Cheese', '2 hours', ['vegan lasagna noodles', 'tomatoes', 'onions'], ['do this', 'then this', 'finally this']),
    new Recipe('Meat Lasagna with Cashew Ricotta Cheese', '2 hours', ['vegan lasagna noodles', 'tomatoes', 'onions'], ['do this', 'then this', 'finally this']),
    new Recipe('Veggie Lasagna with Cashew Ricotta Cheese', '2 hours', ['vegan lasagna noodles', 'tomatoes', 'onions'], ['do this', 'then this', 'finally this']),
  ];
}

export class Recipe {
  constructor(public title: string, public cooktime: string, public ingredients: string[], public directions: string[], ) { }
}
