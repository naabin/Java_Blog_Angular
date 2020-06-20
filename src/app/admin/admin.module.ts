import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { EditorComponent } from './editor/editor.component';
import {QuillModule} from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    SharedModule,
    MatFormFieldModule,
    
  ],
  exports: [
    EditorComponent
  ]
})
export class AdminModule { }
