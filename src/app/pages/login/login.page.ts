import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/service/authservice.service';
import { User } from 'src/app/service/user.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginIn = true;
  isAuthRole;
  email: string;
  password: string;
  constructor(private authSerice: AuthService,
              private router: Router,
              private loadingController: LoadingController) { }

  ngOnInit() {
    this.authSerice.getUser();
  }
  async isAuth(){
    const obj = {
      email: this.email,
      password:this.password,
    };
    console.log(obj);
    this.isAuthRole = this.authSerice.isAuth(obj);
    if(this.isAuthRole === 'user'){
      const loading = await this.loadingController.create({
        message: 'Logged In...',
        duration: 2000
      });
      await loading.present();
      this.router.navigate(['user/flights']);
    }if(this.isAuthRole === 'admin'){
      const loading = await this.loadingController.create({
        message: 'Logged In...',
        duration: 2000
      });
      await loading.present();
      this.router.navigate(['admin']);
    }
    else{
      const loading = await this.loadingController.create({
        message: 'Email or password is not correct',
        duration: 2000
      });
      await loading.present();
    }
  }

  passChange(event){
    this.password = event.target.value;
  }
  emailChange(event){
    this.email = event.target.value;
  }
  async signUp(){
    this.authSerice.addUser({email:this.email,password:this.password,role:'user'});
    const loading = await this.loadingController.create({
      message: 'Logged In...',
      duration: 2000
    });
    this.router.navigate(['user/flights']);
  }
  changeStatus(){
    this.loginIn = !this.loginIn;
  }
}
