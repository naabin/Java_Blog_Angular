import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SinglePostViewComponent } from './single-post-view/single-post-view.component';


const routes: Routes = [
  {
    path: 'aboutme',
    component: AboutMeComponent,
    pathMatch: 'full'
  },
  {
    path: ':title/:id/details',
    component: SinglePostViewComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: BlogViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
