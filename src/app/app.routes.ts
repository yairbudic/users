import {Routes} from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddUserComponent } from './addUser/add-user.component';

export const routes: Routes = [
	{path: '', redirectTo: 'list', pathMatch: 'full'},
	{path: 'list', component: ListComponent},
	{path: 'addUser', component: AddUserComponent},
];
