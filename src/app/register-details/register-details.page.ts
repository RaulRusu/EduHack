import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.page.html',
  styleUrls: ['./register-details.page.scss'],
})
export class RegisterDetailsPage implements OnInit {

  gender;
  university;
  birthDate;
  selfDescription;
  location;
  constructor() { }

  ngOnInit() {
  }

}
