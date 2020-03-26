import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiLoginService } from '../../services/api-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginUserData = {username: '', email: '', password: ''};
  constructor(private api: ApiLoginService,
              private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    console.log(this.loginUserData);

    this.api.loginUser(this.loginUserData).subscribe(
      res => {
        console.log(res);
        console.log('LOGIN SUCCESS!!!');

        localStorage.setItem('key', res.key);
        alert('You successfully logged in!');
        // this.router.navigate(['']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
