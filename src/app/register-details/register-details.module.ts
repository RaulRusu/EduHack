import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterDetailsPageRoutingModule } from './register-details-routing.module';

import { RegisterDetailsPage } from './register-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterDetailsPageRoutingModule
  ],
  declarations: [RegisterDetailsPage]
})
export class RegisterDetailsPageModule {}
