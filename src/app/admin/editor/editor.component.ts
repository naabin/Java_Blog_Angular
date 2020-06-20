import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Tag } from 'src/app/models/blog.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor() { }
  content: string;

  tags: Tag[] = [];
  quilFormGroup = new FormGroup({
    'title': new FormControl(''),
    'tag': new FormControl(''),
    'content': new FormControl(''),
  })

  ngOnInit() {
  }

  submittedData(){
    this.content = this.quilFormGroup.get('content').value;
    console.log(this.quilFormGroup.get('tag').value);
    console.log(this.tags)
  }
}
