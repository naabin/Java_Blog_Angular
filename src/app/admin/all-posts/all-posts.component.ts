import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/public/service/blog.service';
import { Blog } from 'src/app/models/blog.model';
import { BehaviorSubject } from 'rxjs';
import { ImageResponse, ImageService } from 'src/app/shared/services/image-service/image.service';
import { NotificationService } from 'src/app/shared/services/notification-service/notification.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  constructor(
    private blogService: BlogService, 
    private imageService: ImageService,
    private notificationService: NotificationService) { }

  blog: Blog;
  imageLoading = false;
  image$ = new BehaviorSubject<ImageResponse>(null);
  draftPosts: Blog[] = [];
  publishedPosts: Blog[] = [];
  
  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe(data => {
        for(let blog of data.content){
            if(blog.published){
              this.publishedPosts.push(blog);
            } else {
              this.draftPosts.push(blog);
            }
        }
      })
  }

  getId(id: number){
    this.blogService.getBlogById(id).subscribe(data => {
      this.blog = data;
      this.image$.next(data.image);
    })
  }


  uploadImage(e: any){
    const file = e.files[0];
    this.imageLoading = true
    if (file == undefined || file == null){
      this.notificationService.addError('Choose the file first');
      return;
    }
    this.imageService.uploadBlogImage(file, this.blog.id)
      .subscribe(data => {
        this.imageLoading = false;
        this.image$.next(data);
      }, () => {
        this.imageLoading = false;
      })
  }

}
