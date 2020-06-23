import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { TokenService } from 'src/app/util/token/token.service';
import { Router } from '@angular/router';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';


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

  constructor(private userService: UserService, public toekenService: TokenService, private router: Router) { }

  ngOnInit() {
  }

  loginSubmit(){
    this.loading = true;
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.userService.login({email, password}).subscribe(
      data => {
        if(data){
          this.toekenService.bearerToken = data.headers.get('token');
          this.loading = false;
          this.router.navigateByUrl('/admin');
        }
      }, () => console.error
    );
  }

}
