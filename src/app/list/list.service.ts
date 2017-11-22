import {Injectable} from '@angular/core';
import { User } from '../common/user';


@Injectable()
export class ListService {

	private _users: User[];

	constructor() {
		this._users = [{
			'UserId': '1',
			'IsActive': true,
			'Name': 'aaa',
			'Icon': '',
			'Roles': [{
				'ID': 1,
				'Name': 'developer'
			}]
		},
		{
			'UserId': '2',
			'IsActive': true,
			'Name': 'aba',
			'Icon': '',
			'Roles': [{
				'ID': 3,
				'Name': 'product'
			}]
		},
		{
			'UserId': '3',
			'IsActive': false,
			'Name': 'aab',
			'Icon': '',
			'Roles': [{
				'ID': 2,
				'Name': 'manager'
			}]
		},
		];
	}

	public get users(): User[] {
		return this._users;
	}

}
