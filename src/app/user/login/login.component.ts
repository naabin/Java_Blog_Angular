import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { TokenService } from 'src/app/util/token/token.service';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    'email': new FormControl('', {validators: [Validators.required, Validators.email]}),
    'password': new FormControl('', {validators: [Validators.required, Validators.minLength(6)]})
  });

  constructor(private userService: UserService, public toekenService: TokenService) { }

  ngOnInit() {
  }

  loginSubmit(){
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.userService.login({email, password}).subscribe(
      data => {
        if(data){
          this.toekenService.bearerToken = data.headers.get('token');
        }
      }, () => console.error
    );
  }

}
