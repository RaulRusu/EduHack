import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileMentorPage } from './profile-mentor.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileMentorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileMentorPageRoutingModule {}
