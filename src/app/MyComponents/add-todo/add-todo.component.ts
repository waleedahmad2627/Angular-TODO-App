import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { todos } from '../../todos';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  @Output() addTodo = new EventEmitter<todos>();
  constructor() { }

  onSubmit(){
    const todo = {
      id:8,
      name: this.title,
      description: this.desc,
      completed: false
    }
    this.addTodo.emit(todo);
    console.log("Form Submitted with title: " + this.title + " and description: " + this.desc);
    
  }
title: string = "";
desc : string = "";

}
