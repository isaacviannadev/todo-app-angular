import { Component, OnChanges, OnInit } from '@angular/core';
import {
  Todo,
  TodosService,
} from 'src/app/shared/services/Todos/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnChanges, OnInit {
  constructor(private todoService: TodosService) {}

  todoList: Todo[] = [];
  filter: 'all' | 'completed' | 'active' = 'all';

  ngOnInit(): void {
    this.todoList = this.todoService.getTodoList();
    this.todoService.setCallback(this.setTodoList);
  }

  ngOnChanges(): void {
    this.todoList = this.todoService.getTodoList();
  }

  filterTodoList = (filter: string) => {
    switch (filter) {
      case 'all':
        return this.todoService.getTodoList();

      case 'completed':
        this.todoList = this.todoService
          .getTodoList()
          .filter((todo) => todo.completed);
        return this.todoList;

      case 'active':
        this.todoList = this.todoService
          .getTodoList()
          .filter((todo) => !todo.completed);
        return this.todoList;

      default:
        return this.todoService.getTodoList();
    }
  };

  setTodoList = () => {
    this.todoList = this.filterTodoList(this.filter);
  };

  removeTodo = (id: number) => {
    this.todoService.removeTodo(id);

    this.todoList = this.todoService.getTodoList();
  };

  toggleTodo = (id: number) => {
    this.todoService.toggleTodo(id);
  };

  handleFilter = (filter: 'all' | 'completed' | 'active') => {
    this.filter = filter;
    this.todoList = this.filterTodoList(filter);
  };
}
