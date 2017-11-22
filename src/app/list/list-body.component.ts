import { Component, Input, OnInit } from '@angular/core';
import { User } from '../common/user';

@Component({
  selector: 'app-list-body',
  template: `
      <ul class="users">
        <li *ngFor="let user of users">
            <div class="user">
                <b [innerHtml] = "user.Name "></b>
                <span [innerHtml] = "user.IsActive | convertBol"></span>
            </div>
        </li>
      </ul>
  `,
  styles: []
})
export class ListBodyComponent implements OnInit {
  @Input() users: User[];

  constructor() { }

  ngOnInit() {
  }

}
