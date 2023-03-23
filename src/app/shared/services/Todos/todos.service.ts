import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoList: Todo[] = [];
  title: string = '';

  public catchTitle = (title: any) => {
    this.title = title;

    return this.title;
  };

  public setToStorage = () => {
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  };

  public addTodo = () => {
    if (!this.title) return;

    this.todoList.push({
      id: this.todoList.length + 1,
      title: this.title,
      completed: false,
    });

    this.setToStorage();

    this.title = '';

    return this.todoList;
  };

  public removeTodo = (id: number) => {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);

    this.setToStorage();
    return this.todoList;
  };

  public toggleTodo = (id: number) => {
    this.todoList = this.todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    this.setToStorage();
    return this.todoList;
  };

  public getTodoList = () => {
    return this.todoList;
  };

  public filterTodoList = (filter: string) => {
    switch (filter) {
      case 'all':
        return this.todoList;

      case 'completed':
        return this.todoList.filter((todo) => todo.completed);

      case 'active':
        return this.todoList.filter((todo) => !todo.completed);

      default:
        return this.todoList;
    }
  };

  constructor() {
    const todoListFromStorage = localStorage.getItem('todoList');

    if (todoListFromStorage) {
      this.todoList = JSON.parse(todoListFromStorage);
    }
  }
}
