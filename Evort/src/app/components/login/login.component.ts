import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiLoginService } from '../../services/api-login.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../shared/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login: Login;
  error: object;
  @ViewChild('fform') loginFormDirective;

  formErrors = {
    username: '',
    password: ''
  };

  validationMessages = {
    username: {
      required: 'User Name is required.',
      minlength: 'User Name must be at least 3 characters long.',
    },
    password: {
      required: 'Password is required.',
      minlength: 'Password must be at least 3 characters long.',
    },
  };

  constructor(private api: ApiLoginService,
              private router: Router,
              private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });

    this.loginForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set form validation messages.
  }

  onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] =  '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key];
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.login = this.loginForm.value;
    console.log(this.login);

    this.api.loginUser(this.login).subscribe(
      res => {
        // If success
        console.log(res);
        console.log('LOGIN SUCCESS!!!');

        this.loginForm.reset({
          username: '',
          password: '',
        });
        this.loginFormDirective.resetForm();

        localStorage.setItem('key', res.key);
        alert('You successfully logged in!');
        this.router.navigate(['']);
      },
      err => {
        // If error
        console.log(err);
        this.error = err.error.non_field_errors[0];
      }
    );
  }
}
