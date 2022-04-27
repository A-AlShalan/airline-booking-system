/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { use } from 'vue/types/umd';
import { Flight } from './flights.config';
import { User } from './user.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users = [
    {
      email: 'aaa',
      password: 'aaa',
      role: 'admin'
    },
    {
      email: 'bbb',
      password: 'aaa',
      role: 'admin'
    },
    {
      email: 'ccc',
      password: 'aaa',
      role: 'user'
    },
    {
      email: 'ddd',
      password: 'aaa',
      role: 'user'
    },
  ];
  constructor() {}

  isAuth(user) {
  for (let index = 0; index < this.users.length; index++) {
      if(this.users[index].email=== user.email) {
        if(this.users[index].password === user.password){
          if(this.users[index].role === 'admin'){
            return 'admin'
          }else{
            return 'user'
          }
        }
      }
  }
  return false;

  }
  addUser(user: User){
    this.users.push(user)
  }
}
