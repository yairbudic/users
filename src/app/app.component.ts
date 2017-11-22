import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="addUser">addUser</a>
    <a routerLink="list">list</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app';
}
