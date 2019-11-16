import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../auth-service.service';
import {NavParamsService} from '../nav-params.service';
import {Router, Routes} from '@angular/router';

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
  userData;
  constructor(private authService: AuthServiceService,
              private navParams: NavParamsService,
              private router: Router) {
    this.userData = {};
  }

  ngOnInit() {
  }

  setData() {
      this.userData = {
      details : {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone
      }
    };
  }

  signUp() {
    this.setData();
    this.userData.type = 'user';
    this.authService.register(this.email, this.passwordRegister, this.userData);
  }

  continueTo() {
    this.setData();
    this.navParams.pushBack(this.userData);
    this.navParams.pushBack(this.passwordRegister);
    this.navParams.pushBack(this.email);
    this.router.navigate(['/register-details']);
  }

}
