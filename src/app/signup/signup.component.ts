import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent implements OnInit {

  constructor() { }

  public signupForm: FormGroup = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email_address: new FormControl(''),
    password: new FormControl(''),
    day: new FormControl(''),
    month: new FormControl(''),
    year: new FormControl(''),
    gender: new FormControl('')
  })

  public days: Array<number> = Array.from(Array(31).keys());
  public months: Array<number> = Array.from(Array(12).keys());
  public years: Array<number> = Array.from(Array(122).keys(), x => x + 1901);


  ngOnInit(): void {
    this.years = this.years.reverse();
  }

  public facebookSignup(): void {
    console.log(this.signupForm.value)
  }

}
