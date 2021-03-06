import { Component, OnInit } from '@angular/core';
import {NavParamsService} from '../nav-params.service';
import {ConsultationsService} from '../consultations.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.page.html',
  styleUrls: ['./consultation.page.scss'],
})
export class ConsultationPage implements OnInit {
  private consultationInformation;
  private consultationID;
  private mentorDetails;
  constructor(private navParams: NavParamsService,
              private consultationsService: ConsultationsService,
              private router: Router) { }

  ngOnInit() {
    this.consultationInformation = this.navParams.popBack();
    this.consultationID = this.navParams.popBack();
    this.mentorDetails = this.navParams.popBack();
  }

  parseDomain(domain) {
    let cap = domain.charAt(0).toUpperCase() + domain.slice(1);
    for (let i = 1; i < cap.length; i++) {
      if (cap[i].toUpperCase() === cap[i] && cap[i] >= 'A' && cap[i] <= 'Z') {
        cap = cap.slice(0, i) + ' ' + cap.slice(i, cap.length);
        i++;
      }
    }
    return cap;
  }
  openProfileMentor(){
    this.router.navigate(['/profile-mentor']);
  }
}
