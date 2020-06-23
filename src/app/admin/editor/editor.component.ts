import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Tag } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/public/service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  tags: {name:string}[] = [];
  quilFormGroup = new FormGroup({
    'title': new FormControl(''),
    'tag': new FormControl(''),
    'content': new FormControl(''),
  })

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit() {
  }

  submittedData(){
    const userId = JSON.parse(localStorage.getItem('userId'));
    if(userId){
      const title = this.quilFormGroup.get('title').value;
      const content = this.quilFormGroup.get('content').value;
      
      this.blogService.saveBlog({title: title, content: content, tags:this.tags}, userId.toString()).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl("/");
      })
    }
  }
}
