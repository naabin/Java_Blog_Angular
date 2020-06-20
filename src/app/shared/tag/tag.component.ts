import { Component, OnInit, Input } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl } from '@angular/forms';
import { Tag } from 'src/app/models/blog.model';



@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  @Input('control') control: FormControl;
  @Input("tags")tags: Tag[];
  readonly seperatorKeyCodes: number[] = [ENTER, COMMA];
  removable = true;
  

  constructor() { }

  add(event: MatChipInputEvent){
    const input = event.input;
    const value = event.value;

    if((value || '').trim()){
      this.tags.push({name: value.trim(), id: Math.ceil(Math.random() * 1000)});
    }
    if(input){
      input.value = '';
    }
  }

  remove(tag: Tag){
    const index = this.tags.indexOf(tag);
    if(index >= 0){
      this.tags.splice(index, 1);
    }
  }

  ngOnInit() {
  }

}
