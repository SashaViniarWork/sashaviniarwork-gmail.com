import { Component, OnInit } from '@angular/core';
import { ApiLoginService } from '../../services/api-login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerUserData = {username: '', email: '', password1: '', password2: ''};
  constructor(private api: ApiLoginService) { }

  ngOnInit(): void {
  }

  registerUser() {
    console.log(this.registerUserData);

    this.api.registerUser(this.registerUserData).subscribe(
      res => {
        console.log(res);
        console.log('SUCCESS!!!');

        localStorage.setItem('key', res.key);
        alert('You successfully registered!');
        // this.router.navigate(['']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
