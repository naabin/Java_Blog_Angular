import { Component, OnInit } from '@angular/core';
import { NotificationService, Notification } from '../services/notification-service/notification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notification$: Observable<Notification[]>;

  constructor(private notificationService: NotificationService) {
    this.notification$ = this.notificationService.notificationOutput;
   }

  

  ngOnInit(): void {
  }

  clearMesage(id: number){
    this.notificationService.clear(id);
  }

}
