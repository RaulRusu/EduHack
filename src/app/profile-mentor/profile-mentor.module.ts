import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileMentorPageRoutingModule } from './profile-mentor-routing.module';

import { ProfileMentorPage } from './profile-mentor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileMentorPageRoutingModule
  ],
  declarations: [ProfileMentorPage]
})
export class ProfileMentorPageModule {}
