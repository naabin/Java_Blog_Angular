import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizHomeComponent } from './quiz-home/quiz-home.component';


@NgModule({
  declarations: [QuizHomeComponent],
  imports: [
    CommonModule,
    QuizzesRoutingModule
  ]
})
export class QuizzesModule { }
