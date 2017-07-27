import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  error: any;
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  signup() {
    this.authService.signupWithEmail(this.signupForm.value.email, this.signupForm.value.password)
    .then(success => {
      this.router.navigate(['/home']);
    })
    .catch(err => {
      this.error = err;
    });
  }

  cancel() {
    this.router.navigate(['/login']);
  }

  private createForm() {
    this.signupForm = new FormGroup({
      email: this.emailFormControl,
      password: this.passwordFormControl
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
