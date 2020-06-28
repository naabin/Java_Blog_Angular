import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { QuillModule } from 'ngx-quill';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { AboutMeComponent } from './about-me/about-me.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BlogViewComponent, AboutMeComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    QuillModule.forRoot(),
    MatChipsModule,
    MatIconModule,
    SharedModule,
  ],
  exports: [BlogViewComponent]
})
export class PublicModule { }
