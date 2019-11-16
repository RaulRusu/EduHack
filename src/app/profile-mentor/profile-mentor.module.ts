import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileMentorPageRoutingModule } from './profile-mentor-routing.module';

import { ProfileMentorPage } from './profile-mentor.page';
import {StarRatingModule} from 'ionic4-star-rating';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProfileMentorPageRoutingModule,
        StarRatingModule
    ],
  declarations: [ProfileMentorPage]
})
export class ProfileMentorPageModule {}
