import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { AboutMeComponent } from './about-me/about-me.component';


const routes: Routes = [
  {
    path: '',
    component: BlogViewComponent
  },
  {
    path: 'aboutme',
    component: AboutMeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
