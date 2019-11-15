import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import {AngularFireDatabase} from '@angular/fire/database';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {
  constructor(private db: AngularFireDatabase) {
    this.returnSomeData().update({data: 'data2'});
  }

  returnSomeData() {
    return this.db.object('item');
  }

}
