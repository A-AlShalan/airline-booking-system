import { HttpClient } from '@angular/common/http';
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { User } from './user.config';
import {sha256} from 'crypto-hash';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users = [];
  constructor(private http: HttpClient) {}
  getUser(){
   return this.http.get('http://localhost:8080/user').toPromise().then(res =>{
     this.users.push(res)
   });
  }
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
  async addUser(user: User){
    console.log(user);
    const hashedPass = await sha256(user.password);
    console.log('This is the hashed passeor: ', hashedPass);
    this.users.push(user)
  }
}
