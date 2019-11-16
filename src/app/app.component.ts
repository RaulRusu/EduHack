import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthServiceService} from './auth-service.service';
import { Router } from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar,
      private authService: AuthServiceService,
      private router: Router,
      private db: AngularFireDatabase
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.authService.getAuthState().subscribe((data) => {
        if (data === null) {
          this.router.navigateByUrl('/login');
        } else {
          this.db.object('users/' + this.authService.getUserToken() + '/type').valueChanges().subscribe((type) => {
            if (type === 'mentor')
              this.router.navigateByUrl('/home-mentor');
            else
              this.router.navigateByUrl('/tabs');
          });

        }
      });
      this.splashScreen.hide();
    });
  }
}
