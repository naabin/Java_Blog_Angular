import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { EditorComponent } from './editor/editor.component';
import {QuillModule} from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AllPostsComponent } from './all-posts/all-posts.component';


@NgModule({
  declarations: [EditorComponent, AllPostsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    SharedModule,
    MatFormFieldModule,
    MatTabsModule,
    MatCheckboxModule,
    
  ],
  exports: [
    EditorComponent
  ]
})
export class AdminModule { }
