import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Blog } from 'src/app/models/blog.model';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BlogService } from '../service/blog.service';
import { NotificationService } from 'src/app/shared/services/notification-service/notification.service';

@Component({
  selector: 'app-single-post-view',
  templateUrl: './single-post-view.component.html',
  styleUrls: ['./single-post-view.component.css']
})
export class SinglePostViewComponent implements OnInit {

  private location: Location;
  private state: any;
  loading = false;
  blog: Blog;


  constructor(
    private route: ActivatedRoute, 
    location: Location, 
    private blogService:BlogService,
    private notificationService: NotificationService,
    ) {
    this.location = location;
   }

  ngOnInit(): void {
    this.state = this.location.getState();
    if(this.state && this.state.blog){
      this.blog = this.state.blog;
    } else {
      this.loading = true;
      console.log(this.route.paramMap);
      this.route.params.pipe(
        switchMap(({title, id}) => {
          return this.blogService.getBlogById(id)
        })
      ).subscribe((res) => {
        this.blog = res;
        this.loading = false;
      }, () => this.notificationService.addError('Something went wrong.'));
    }

  }

}
