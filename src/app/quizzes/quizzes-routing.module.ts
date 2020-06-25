import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizHomeComponent } from './quiz-home/quiz-home.component';


const routes: Routes = [
  {
    path: '',
    component: QuizHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule { }
