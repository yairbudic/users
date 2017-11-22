import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  template: `
          <app-list-head></app-list-head>
          <app-list-body [users]="listService.users"></app-list-body>
  `,
  styles: []
})
export class ListComponent implements OnInit {

  public listService: ListService
  constructor(listService: ListService) {
    this.listService = listService;
  }

  ngOnInit() {
  }

}
