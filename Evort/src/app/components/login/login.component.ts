import { Component, OnInit } from '@angular/core';
import { ApiLoginService } from '../../services/api-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginUserData = {username: '', email: '', password: ''};
  constructor(private api: ApiLoginService) { }

  ngOnInit(): void {
  }

  loginUser() {
    console.log(this.loginUserData);

    this.api.loginUser(this.loginUserData).subscribe(
      res => {
        console.log(res);
        console.log('SUCCESS!!!');
      },
      err => {
        console.log(err);
      }
    );
  }

}
