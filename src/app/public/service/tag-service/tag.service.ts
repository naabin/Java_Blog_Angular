import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DEVELOPMENT_URL } from 'src/app/util/remoteUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private BASE_URL = DEVELOPMENT_URL;

  private headers = new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  );

  constructor(private http: HttpClient) { }

  checkUniqueTag(tagName: string): Observable<{available: boolean}>{
    return this.http.get<{available: boolean}>(`${this.BASE_URL}/api/tag`, {params: {'tag': tagName}, headers: this.headers});
  }
}
