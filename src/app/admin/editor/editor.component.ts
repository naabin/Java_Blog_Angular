import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BlogService } from 'src/app/public/service/blog.service';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog.model';
import { NotificationService } from 'src/app/shared/services/notification-service/notification.service';
import { UniqueTagValidator } from '../uniqie-tag.validator';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @Input() blog: Blog;

  tags: {name:string}[] = [];
  quilFormGroup = new FormGroup({
    'title': new FormControl(''),
    'tag': new FormControl(''),
    'content': new FormControl(''),
    'publish': new FormControl('')
  })

  constructor(
    private blogService: BlogService, 
    private notificationService: NotificationService,
    private router: Router) { }

  ngOnInit() {
    if(this.blog){
      for(let tag of this.blog.tags){
        this.tags.push({name: tag.name});
      }
    }
  }

  submittedData(){
    console.log(this.tags)
    const userId = JSON.parse(localStorage.getItem('userId'));
    const title = this.quilFormGroup.get('title').value;
    const content = this.quilFormGroup.get('content').value;
    const publish = this.quilFormGroup.get('publish').value || false;
    if(this.blog){
      this.blogService.upateBlog(this.blog.id, {title, content, published: publish, tags: this.blog.tags}).subscribe(data => {
        this.router.navigateByUrl('/admin/dashboard');
      }, () => {
        this.notificationService.addError('Oops! something went wrong.');
      })
    }
    else if(userId){
      this.blogService.saveBlog({title: title, content: content, tags:this.tags, published: publish}, userId.toString()).subscribe(data => {
        this.notificationService.addSuccess('Successfully created blog.');
        this.router.navigateByUrl("/");
      }, () => {
        this.notificationService.addError('Oops! something went wrong.');
      })
    }
  }
}
