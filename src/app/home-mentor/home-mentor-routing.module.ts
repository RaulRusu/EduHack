import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeMentorPage } from './home-mentor.page';

const routes: Routes = [
  {
    path: '',
    component: HomeMentorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeMentorPageRoutingModule {}
