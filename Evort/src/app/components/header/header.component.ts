import { Component, OnInit } from '@angular/core';
import {ApiLoginService} from '../../services/api-login.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isLoggedIn$: Observable<boolean>;                  // {1}

  constructor(private apiLoginService: ApiLoginService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.apiLoginService.isLoggedIn; // {2}
  }
}
