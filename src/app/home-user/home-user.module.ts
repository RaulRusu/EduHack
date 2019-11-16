import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeUserPageRoutingModule } from './home-user-routing.module';

import { HomeUserPage } from './home-user.page';
import {IonicRatingModule} from 'ionic4-rating/dist';
import {StarRatingModule} from 'ionic4-star-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeUserPageRoutingModule,
    IonicRatingModule,
    StarRatingModule
  ],
  declarations: [HomeUserPage]
})
export class HomeUserPageModule {}
