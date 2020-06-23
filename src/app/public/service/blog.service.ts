import { Injectable } from '@angular/core';
import { DEVELOPMENT_URL } from 'src/app/util/remoteUrl';
import { HttpClient } from '@angular/common/http';
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

 }


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private BASE_URL = DEVELOPMENT_URL;

  constructor(private http: HttpClient) { }

  getBlogs(pageNumber: number = 0, pageSize: number = 10): Observable<BlogResponse>{
    return this.http.get<BlogResponse>(`${this.BASE_URL}/blog`, 
    {params: 
      {
        pageNumber: pageNumber.toString(),
        pageSize: pageSize.toString(),
      }
    }
    );
  }

  saveBlog(blog: BlogRequest, userId: string): Observable<Blog>{
    return this.http.post<Blog>(`${this.BASE_URL}/blog`, JSON.stringify(blog), {params: {userId}});
  }

  updateBlog(id: number, blog: Blog): Observable<Blog>{
    return this.http.put<Blog>(`${this.BASE_URL}/blog/${id}`, blog);
  }
}
