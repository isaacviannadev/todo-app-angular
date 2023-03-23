import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/general.service';
import { TodosService } from 'src/app/shared/services/Todos/todos.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  headTitle: string = 'Modal Title';
  actionText: string = 'Action Text';
  @Input('value') title: string = '';

  constructor(
    private generalService: GeneralService,
    private todoService: TodosService
  ) {}

  ngOnInit(): void {}

  catchValue = (value: Event) => {
    this.todoService.catchTitle((value.target as HTMLInputElement).value);
  };

  closeModal = () => {
    this.generalService.showModal = false;
  };

  handleAction = () => {
    this.todoService.addTodo();
    this.closeModal();
  };
}
