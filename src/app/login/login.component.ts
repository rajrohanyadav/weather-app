import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.loginForm = new FormGroup({
      email: this.emailFormControl,
      password: this.passwordFormControl
    });
  }

  login() {
    this.authService.loginWithEmail(this.loginForm.value.email, this.loginForm.value.password)
    .then(success => {
      this.router.navigate(['/home']);
    })
    .catch(err => {
      this.error = err;
    });
  }

  loginGoogle() {
    this.authService.loginWithGoogle()
    .then(success => {
      this.router.navigate(['/home']);
    })
    .catch(err => {
      this.error = err;
    });
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

}
