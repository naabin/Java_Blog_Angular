import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification-service/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;

  loginForm = new FormGroup({
    'email': new FormControl('', {validators: [Validators.required, Validators.email]}),
    'password': new FormControl('', {validators: [Validators.required, Validators.minLength(6)]})
  });

  constructor(
      private userService: UserService, 
      private notificationService: NotificationService,
      private router: Router) { }

  ngOnInit() {
  }

  loginSubmit(){
    this.loading = true;
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.userService.login({email, password}).subscribe(
      data => {
        if(data){
          this.loading = false;
          this.notificationService.addSuccess('Welcome to my small world');
          this.router.navigateByUrl('/admin');
        }
      }, () => {
        this.notificationService.addError('Login error. It could be someone else credentials. Try hacking');
        this.loading = false;
      }
    );
  }

}
