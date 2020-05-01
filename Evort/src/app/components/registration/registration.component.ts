import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiLoginService } from '../../services/api-login.service';
import { Register } from '../shared/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  register: Register;
  error: object;
  @ViewChild('fform') registerFormDirective;

  formErrors = {
    username: '',
    email: '',
    password1: '',
    password2: ''
  };

  validationMessages = {
    username: {
      required:  'Username is required.',
      minlength: 'Username is too short.',
    },
    email: {
      required:  'Email is required.',
      email:     'Email not in valid format.'
    },
    password1: {
      required:  'Password is required.',
      minlength:   'Password is too short'
    },
    password2: {
      required: 'Password confirm is required.',
      mustMatch: 'Password confirm don`t match'
    },
  };

  constructor(private api: ApiLoginService,
              private fb: FormBuilder,
              private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password1: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', [Validators.required]],
    }, {
      validator: this.MustMatch('password1', 'password2')
    });

    this.registerForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set form validation messages.
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  onValueChanged(data?: any)  {
    if (!this.registerForm) { return; }
    const form = this.registerForm;
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
    this.register = this.registerForm.value;
    console.log(this.register);

    this.api.registerUser(this.register).subscribe(
      res => {
        // If success
        console.log(res);
        console.log('LOGIN SUCCESS!!!');

        this.registerForm.reset({
          username: '',
          password: '',
        });
        this.registerFormDirective.resetForm();

        localStorage.setItem('key', res.key);
        alert('You successfully logged in!');
        this.router.navigate(['']);
      },
      err => {
        // If error
        console.log(err.error);
        console.log('OBANANA');
        this.error = err.error;
      }
    );
  }
}
