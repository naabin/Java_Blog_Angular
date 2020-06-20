import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DEVELOPMENT_URL } from 'src/app/util/remoteUrl';
import { Observable } from 'rxjs';
import { Config } from 'protractor';

export interface LoginResponse {
  id: number,
  name: string;
  email: string;
  providerId: string;
  emailVerified: boolean;
  imageUrl: string;
  resetPin: number;
  createdDate: Date;
}


export interface LoginRequest{
  email: string;
  password: string;
}

export interface SignupRequest {
  name: string;
  eamil: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASEURL = DEVELOPMENT_URL;

  constructor(private http: HttpClient) { }


  login(login: LoginRequest): Observable<HttpResponse<LoginRequest>> {
    return this.http.post<LoginRequest>(`${this.BASEURL}/auth/login`, login, {observe: 'response'}) ;
  }

  signup(signup: SignupRequest): Observable<any> {
    return this.http.post<any>(`${this.BASEURL}/auth/signup`, JSON.stringify(signup));
  }




}
