import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/service/user.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userLoggedIn: BehaviorSubject<string>;
  constructor(private userService: UserService) {
    this.userLoggedIn = this.userService.currentUserValue;
   }

  

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout().subscribe(_ => {
      console.log('Logged out successfully');
    })
  }

}
