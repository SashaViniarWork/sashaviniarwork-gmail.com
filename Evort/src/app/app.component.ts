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
  movies = [{title: 'test'}, {title: 'test-2'}];
  password = [{value: 123}];

  constructor(private api: ApiLoginService) {
    this.getMovies();
    this.checkPassword();
  }

  getMovies = () => {
    this.api.getAllMovies().subscribe(
      data => {
        this.movies = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  checkPassword = () => {
    this.api.checkPassword().subscribe(
      data => {
        this.password = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
