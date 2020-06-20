import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogViewComponent } from './blog-view/blog-view.component';


const routes: Routes = [
  {
    path: '',
    component: BlogViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
