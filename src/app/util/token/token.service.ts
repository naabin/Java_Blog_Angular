import { Injectable } from '@angular/core';
import { Observable, Subscription, Subject, timer } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

import {pluck, map, takeUntil, switchMap, shareReplay} from 'rxjs/operators';

import { Router } from '@angular/router';
import { DEVELOPMENT_URL } from '../remoteUrl';

export interface RefreshToken {
  refreshToken: string;
  userId: number;
}


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private BASE_URL = DEVELOPMENT_URL;

  private tokenCache: Observable<HttpResponse<RefreshToken>>;
  private readonly CACHE_SIZE = 1;
  private readonly REFRESH_INTERVAL = 45000;
  private token: string;
  private tokenSubscription: Subscription;
  private stopTimer: Subject<boolean>;


  constructor(private http: HttpClient, private router: Router) { }

  refershToken(token: string): Observable<HttpResponse<RefreshToken>> {
   return this.http.get<RefreshToken>(`${this.BASE_URL}/auth/refreshToken`,
    {observe: 'response', headers: {
      'Authorization': `Bearer ${token}`
    }});
  }

  clear(){
    if(this.token){
      this.tokenSubscription.unsubscribe();
    }
    if(this.stopTimer){
      this.stopTimer.next(true);
      this.stopTimer = null;
    }
    this.tokenCache = null;
    this.token = null;
  }

  get tokenStream(): Observable<string> {
    return this.tokenCache.pipe(
      map(res => res.headers.get('token'))
    );
  }
  get bearerToken(){
    return this.token;
  }

  set bearerToken(token: string){
    this.token = token;
    if(token && !this.tokenCache){
      const stopTimer = new Subject<boolean>();
      this.stopTimer = stopTimer;
      const tokenTimer = timer(0, this.REFRESH_INTERVAL);
      this.tokenCache = tokenTimer.pipe(
        takeUntil(stopTimer),
        switchMap(() => this.refershToken(this.token)),
        shareReplay(this.CACHE_SIZE));
      this.tokenSubscription = this.tokenCache.subscribe(newToken => {
        this.token = newToken.headers.get('token');
        this.clear();
      });
    }
  }

}
