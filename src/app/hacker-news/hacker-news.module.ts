import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HackerNewsRoutingModule } from './hacker-news-routing.module';
import { NewsHomeComponent } from './news-home/news-home.component';


@NgModule({
  declarations: [NewsHomeComponent],
  imports: [
    CommonModule,
    HackerNewsRoutingModule
  ]
})
export class HackerNewsModule { }
