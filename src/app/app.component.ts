import { Component, OnInit } from '@angular/core';
import { UserService } from './user/service/user.service';
import { TokenService } from './util/token/token.service';
import { switchMap, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
  }
}
