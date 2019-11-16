import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email;
  pass;
  constructor(private authService: AuthServiceService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.email, this.pass);
  }

  register() {
    this.router.navigate(['/register']);
  }

}
