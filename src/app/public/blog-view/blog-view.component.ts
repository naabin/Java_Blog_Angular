import { Component, OnInit } from '@angular/core';
import { BlogService, BlogResponse } from '../service/blog.service';
import { Blog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  blogs: Blog[];
  blogLoading = true;

  ngOnInit() {
    this.blogService.getPublishedBlogs().subscribe(data => {
      console.log(data.content);
      this.blogs = data.content;
      this.blogLoading = false;
    })
  }

}
