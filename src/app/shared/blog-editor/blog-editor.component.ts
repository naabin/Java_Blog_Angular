import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css']
})
export class BlogEditorComponent implements OnInit {

  @Input() blogs: Blog[] = [];

  @Output() getBlogId = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {

  }

  onClick(id: number){
    this.getBlogId.emit(id);
  }

}
