import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private authService: AuthServiceService,
              private router: Router) { }

  ngOnInit() { }

  openProfileMentor(){
    this.router.navigate(['/profile-mentor']);
  }

  private logout() {
    this.authService.logOut();
  }

}
