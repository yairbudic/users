import { Role } from '../common/role';

export class User {
	public UserId: string;
	public IsActive: boolean;
	public Name: string;
	public Icon: string;
	public Roles: Role[];
}
