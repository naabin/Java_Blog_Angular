import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Story {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: bigint;
  title: string;
  type: string;
  url: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  private HACKER_BASE_URL = `https://hacker-news.firebaseio.com/v0`;

  constructor(private http: HttpClient) { }

  getTopStories(limit: number): Observable<number[]>{
    return this.http.get<number[]>(`${this.HACKER_BASE_URL}/beststories.json?orderBy="$key"&limitToFirst=${limit}`);
  }

  getStory(id: number): Observable<Story>{
    return this.http.get<Story>(`${this.HACKER_BASE_URL}/item/${id}.json`)
  }
}
