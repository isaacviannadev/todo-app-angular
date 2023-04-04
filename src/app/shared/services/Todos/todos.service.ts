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
  count: number = 1;
  callback?: () => void;

  public catchTitle = (title: any) => {
    this.title = title;

    return this.title;
  };

  public setCallback = (callback: () => void) => {
    this.callback = callback;
  };

  public setToStorage = () => {
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  };

  public addTodo = () => {
    if (!this.title) return;

    this.todoList.push({
      id: this.count++,
      title: this.title,
      completed: false,
    });

    if (this.callback) this.callback();
    this.setToStorage();

    this.title = '';

    return this.todoList;
  };

  public removeTodo = (id: number) => {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
    if (this.callback) this.callback();
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

  constructor() {
    const todoListFromStorage = localStorage.getItem('todoList');

    if (todoListFromStorage) {
      this.todoList = JSON.parse(todoListFromStorage);
    }
  }
}
