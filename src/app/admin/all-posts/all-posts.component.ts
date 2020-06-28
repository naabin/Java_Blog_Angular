import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/public/service/blog.service';
import { Blog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  blog: Blog;

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
    })
  }

}
