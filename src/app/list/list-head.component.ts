import { Component, Input, OnInit } from '@angular/core';

import { FormControl, FormGroup } from "@angular/forms";
import { User } from "../common/user";

@Component({
  selector: 'app-list-head',
  template: `
      <div class="search_block">
          
      </div>
  `,
  styles: []
})
export class ListHeadComponent{
	searchItems: User[] = [];
	searchValue: string = '';
	searchForm= new FormGroup({
		searchString:  new FormControl()
	});
	@Input() users: User[];

	onChange(event) {
		const newValue = event.target.value;
		if (newValue.length > 2 ){
			this.searchValue = this.searchForm.get('searchString').value;

		}

	}





}
