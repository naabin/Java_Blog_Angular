import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizzesModule } from './quizzes/quizzes.module';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path:'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  }, 
  {
    path: 'hacker-news',
    loadChildren: () => import('./hacker-news/hacker-news.module').then(m => m.HackerNewsModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quizzes/quizzes.module').then(m => m.QuizzesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
