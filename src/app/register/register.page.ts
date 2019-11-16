import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  firstName;
  lastName;
  email;
  passwordRegister;
  passwordRegister2;
  phone;
  constructor() { }

  ngOnInit() {
  }

}
