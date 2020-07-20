import { Component, OnInit } from '@angular/core';
import { HackerNewsService, Story } from '../service/hacker-news.service';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.css']
})
export class NewsHomeComponent implements OnInit {

  constructor(private hackerNewsService: HackerNewsService) { }

  stories: Story[] = [];

  ngOnInit(): void {
    this.hackerNewsService.getTopStories(20)
    .subscribe(data => {
      data.forEach(val => {
        this.hackerNewsService.getStory(val).subscribe(story => {
          this.stories.push(story);
        })
      });
    })
  }

  transFormDate(milliseconds: number){
    return new Date().setTime(milliseconds);
  }
}
