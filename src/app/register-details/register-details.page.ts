import { Component, OnInit } from '@angular/core';
import {NavParamsService} from '../nav-params.service';
import {AuthServiceService} from '../auth-service.service';

@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.page.html',
  styleUrls: ['./register-details.page.scss'],
})
export class RegisterDetailsPage implements OnInit {
  private email;
  private pass;
  gender;
  university;
  birthDate;
  selfDescription;
  location;
  userData;
  constructor(private navParams: NavParamsService,
              private authService: AuthServiceService) {
    this.email = this.navParams.popBack();
    this.pass = this.navParams.popBack();
    this.userData = this.navParams.popBack();
  }

  ngOnInit() {
  }

  register() {
    this.userData.details.gender = this.gender;
    this.userData.details.university = this.university;
    this.userData.details.birthDate = this.birthDate;
    this.userData.details.selfDescription = this.selfDescription;
    this.userData.details.location = this.location;
    this.userData.details.userData = this.userData;
    this.userData.type = 'mentor';
    this.authService.register(this.email, this.pass, this.userData);
  }

}
