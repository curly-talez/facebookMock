import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public loginForm: FormGroup = new FormGroup({
    login_email: new FormControl('', [Validators.required]),
    login_password: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
  }

  public facebookLogin(): void {
    console.log(this.loginForm.value);
  }

}
