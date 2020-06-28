import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag/tag.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { InputComponent } from './input/input.component';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharedRouterModule } from './shared-module.routing';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';



@NgModule({
  declarations: [TagComponent, InputComponent, LoadingButtonComponent, NavBarComponent, PlaceholderComponent, NotificationsComponent, BlogEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    SharedRouterModule,
  
  ],
  exports:[
    TagComponent,
    InputComponent,
    LoadingButtonComponent,
    NavBarComponent,
    PlaceholderComponent,
    NotificationsComponent,
    BlogEditorComponent,

  ]
})
export class SharedModule { }
