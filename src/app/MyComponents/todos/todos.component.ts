import { Component } from '@angular/core';
import { todos } from '../../todos';
import {CommonModule, NgFor, NgForOf} from "@angular/common";
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.css',
    imports: [NgFor, NgForOf, TodoItemComponent, AddTodoComponent,CommonModule]
})
export class TodosComponent {

  localItem: string = "";
  todos: todos[]

  constructor() {
    this.localItem = localStorage.getItem('todos')!; 
    if(this.localItem == null){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    } 
  }
  

  addTodo(todo: todos) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteItem(todo: todos){
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleActive(todo : todos) {
    const index = this.todos.indexOf(todo);
    this.todos[index].completed = !this.todos[index].completed;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

}
