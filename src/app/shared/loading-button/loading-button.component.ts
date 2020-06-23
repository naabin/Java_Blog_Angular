import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.css']
})
export class LoadingButtonComponent implements OnInit {


  @Input() label: string;
  @Input() loading: boolean;
  @Input() invalid: boolean = false;

  constructor() { }


  ngOnInit(): void {
  }

}
