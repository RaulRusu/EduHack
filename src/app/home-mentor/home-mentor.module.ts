import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeMentorPageRoutingModule } from './home-mentor-routing.module';

import { HomeMentorPage } from './home-mentor.page';
import {NgCalendarModule} from 'ionic2-calendar';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomeMentorPageRoutingModule,
        NgCalendarModule
    ],
  declarations: [HomeMentorPage]
})
export class HomeMentorPageModule {}
