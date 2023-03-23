import { Component } from '@angular/core';
import { GeneralService } from './shared/services/general.service';
import { TodosService } from './shared/services/Todos/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    public generalService: GeneralService,
    public todoService: TodosService
  ) {}
}
