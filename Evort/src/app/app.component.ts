import { Component } from '@angular/core';
import {ApiLoginService} from './services/api-login.service';

/**
 * header and footer for all pages
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiLoginService]
})
export class AppComponent {
  title = 'Evort';
  users = [{value: 'Username 1'}, {value: 'Username 2'}];

  constructor(private api: ApiLoginService) {
    this.loginUser();
  }

  loginUser = () => {
    this.api.loginUser().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.log('ERROR!');
        console.log(error);
      }
    );
  }
}
