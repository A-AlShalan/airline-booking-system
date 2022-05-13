import { HttpClient } from '@angular/common/http';
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { User } from './user.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users = [];
  currentUser;
  constructor(private http: HttpClient) {}
  getUser(){
   return this.http.get('http://localhost:8080/users').toPromise().then((res: any[])=>{
    console.log('List of users: ',res);
     this.users = res;
   });
  }
  isAuth(user) {
  for (let index = 0; index < this.users.length; index++) {
      if(this.users[index].email=== user.email) {
        if(this.users[index].password === user.password){
          if(this.users[index].role === 'admin'){
            this.currentUser = user;
            return 'admin'
          }else{
            this.currentUser = user;
            return 'user'
          }
        }
      }
  }
  return false;

  }
  // eslint-disable-next-line no-trailing-spaces
  async addUser(user){
    user.userName = 'Abdullah';
    console.log(user);
   return this.http.post('http://localhost:8080/signup',user).toPromise();
    // this.users.push(user)
  }
}
