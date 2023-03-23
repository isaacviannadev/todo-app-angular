import { Component } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/general.service';
import { TodosService } from 'src/app/shared/services/Todos/todos.service';
import { formatDate } from 'src/utils/helpers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private todoService: TodosService,
    private generalService: GeneralService
  ) {}

  showModal = () => {
    this.generalService.showModal = true;
  };

  get date() {
    return formatDate(new Date());
  }

  get todoCount() {
    return this.todoService.getTodoList().length;
  }

  get userName() {
    return 'John Doe';
  }
}
