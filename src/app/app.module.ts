import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ListModule } from './list/list.module';
import { AddUserModule } from './addUser/addUser.module';
import {routes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(routes),
    ListModule,
    AddUserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
