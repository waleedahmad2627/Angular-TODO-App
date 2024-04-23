import { Component, EventEmitter, Input, Output } from '@angular/core';
import { todos } from '../../todos';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

  @Input() todo!: todos ;
  @Output() deleteTodo = new EventEmitter<todos>();
  @Output() toggleActive = new EventEmitter<todos>();


  constructor() {
   
   }

   onClick(value: todos){
      this.deleteTodo.emit(value);
   }
   onCheckBox() {
    console.log("Checkbox Clicked");
    this.toggleActive.emit(this.todo);
  }
}

