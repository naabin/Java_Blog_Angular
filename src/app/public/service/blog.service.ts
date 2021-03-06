import { Injectable } from '@angular/core';
import { DEVELOPMENT_URL } from 'src/app/util/remoteUrl';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog, Tag } from 'src/app/models/blog.model';
import { Observable } from 'rxjs';

export interface BlogResponse {
  content: Blog[];
  pageable: {
    offset: number,
    pageNumber: number,
    pageSize: number,
    paged: boolean,
    unpageed: boolean,
  },
  totalPages: number;
  totalElements: 1;
  last: boolean;
  first: boolean;
  number: number;
  size: number;
  empty: boolean;
}

 export interface BlogRequest {
   title: string;
   content: string;
   tags: {
     name: string;
   }[];
   published: boolean
 }


@Injectable({
  providedIn: 'root'
})
export class  BlogService {

  private BASE_URL = DEVELOPMENT_URL;

   private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getPublishedBlogs(pageNumber: number = 0, pageSize: number = 10): Observable<BlogResponse>{
    return this.http.get<BlogResponse>(`${this.BASE_URL}/blog/published`, 
    {
      headers: this.headers,
      params: 
      {
        pageNumber: pageNumber.toString(),
        pageSize: pageSize.toString(),
      }
    }
    );
  }

  getAllBlogs(pageNumber: number=0, pageSize: number=10): Observable<BlogResponse>{
    return this.http.get<BlogResponse>(`${this.BASE_URL}/blog`,
    {
      headers: this.headers,
      params: {
        pageNumber: pageNumber.toString(),
        pageSize: pageSize.toString()
      }
    })
  }

  getBlogByName(title:string): Observable<Blog> {
    return this.http.get<Blog>(`${this.BASE_URL}/blog/name`, {params: {'title': title}});
  }

  getBlogById(id: number): Observable<Blog>{
    return this.http.get<Blog>(`${this.BASE_URL}/blog/${id}`, {headers: this.headers});
  }

  upateBlog(blogId: number, blog: BlogRequest){
    return this.http.put<Blog>(`${this.BASE_URL}/blog/${blogId}`, JSON.stringify(blog), {headers: this.headers});
  }

  saveBlog(blog: BlogRequest, userId: string): Observable<Blog>{
    return this.http.post<Blog>(`${this.BASE_URL}/blog`, JSON.stringify(blog), {params: {userId: userId}, headers: this.headers});
  }
}
