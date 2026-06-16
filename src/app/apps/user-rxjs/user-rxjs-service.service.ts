import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { User } from './user';
import { users } from './user-data';


@Injectable({
  providedIn: 'root'
})
export class UserRxjsServiceService {

  constructor() { }

  private users: User[] = users;

  getUsers(): Observable<User> {
    return from(this.users);
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }

  addUser(user: User): void {
    this.users?.push(user);
  }

  updateUser(index: number, user: User): void {
    this.users[index] = user;
  }

}
