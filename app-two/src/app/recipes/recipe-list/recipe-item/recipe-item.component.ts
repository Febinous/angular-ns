import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor() {}
  @Output() recipeSelected = new EventEmitter<void>();
  @Input() recipeChild: Recipe;
  ngOnInit(): void {}
  onSelected() {
    this.recipeSelected.emit();
  }
}
