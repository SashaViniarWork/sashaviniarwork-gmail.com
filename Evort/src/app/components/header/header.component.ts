import { Component, OnInit } from '@angular/core';
import {ApiLoginService} from '../../services/api-login.service';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isLoggedIn$: Observable<boolean>;

  constructor(private apiLoginService: ApiLoginService) { }

  router: Router;

  ngOnInit() {
    this.isLoggedIn$ = this.apiLoginService.isLoggedIn; // {2}
  }

  /*
  Закоментнутий, бо не хоче вилоговувати користувача
   */

  /*
  logout() {
    this.apiLoginService.logoutUser()
      .subscribe(
      res => {
        console.log(res);
        console.log('LOGOUT SUCCESS!!!');

        localStorage.removeItem('key');
        alert('You successfully logged out!');
        }
        );

  }

   */
}
