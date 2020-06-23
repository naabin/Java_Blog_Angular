import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DEVELOPMENT_URL } from 'src/app/util/remoteUrl';
import { Observable, BehaviorSubject } from 'rxjs';
import { Config } from 'protractor';
import { User } from 'src/app/models/blog.model';
import { tap } from 'rxjs/operators';

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

  private currentUserSubject: BehaviorSubject<String>
  private currentUser: Observable<String>

  constructor(private http: HttpClient) { 
    const token = localStorage.getItem('token');
    this.currentUserSubject = new BehaviorSubject<String>(token ? token : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }


  public get currentUserValue(): BehaviorSubject<String> {
    return this.currentUserSubject;
  }


  login(login: LoginRequest): Observable<HttpResponse<User>> {
    return this.http.post<User>(`${this.BASEURL}/auth/login`, login, {observe: 'response'})
    .pipe(
        tap(res => {
          const token = res.headers.get('token');
          this.currentUserSubject.next(token);
          localStorage.setItem('token', token),
          localStorage.setItem('userId', JSON.stringify(res.body.id))
        })
    );
  }

  signup(signup: SignupRequest): Observable<any> {
    return this.http.post<any>(`${this.BASEURL}/auth/signup`, JSON.stringify(signup));
  }




}
