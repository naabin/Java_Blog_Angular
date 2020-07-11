import { Injectable } from '@angular/core';
import { DEVELOPMENT_URL } from 'src/app/util/remoteUrl';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotificationService } from '../notification-service/notification.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface ImageResponse {
  id: number;
  imageURL: string;
  dateCreated: Date;
}


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private BASE_URL = DEVELOPMENT_URL;

  private headers = new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  );


  constructor(private http: HttpClient, private notificationService: NotificationService) {

  }

  uploadBlogImage(file:File, blogId: number): Observable<ImageResponse> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<ImageResponse>(`${this.BASE_URL}/image`,  formData,  
    {
      params: {'blogId': blogId.toString()},
    })
      .pipe(
        tap(
          () => this.notificationService.addSuccess('Image has been uploaded.'),
          () => this.notificationService.addError('Something went wrong')
        )
      );
  }

  deleteBlogImage(imageUrl: string, imageId: number): void{
      this.http.delete(`${this.BASE_URL}/api/image/${imageId}`, {params: {'imageURL': imageUrl}})
        .pipe(
          tap(
            () => this.notificationService.addSuccess('Image successfully deleted'),
            () => this.notificationService.addError('Something went wrong')
          )
        );
  }

  getBlogImageById(blogId: number): Observable<ImageResponse> {
    return this.http.get<ImageResponse>(`${this.BASE_URL}/image/${blogId}`, {headers: this.headers});
  }
}
