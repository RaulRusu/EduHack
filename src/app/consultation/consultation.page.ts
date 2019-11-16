import { Component, OnInit } from '@angular/core';
import {NavParamsService} from '../nav-params.service';
import {ConsultationsService} from '../consultations.service';

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
              private consultationsService: ConsultationsService) { }

  ngOnInit() {
    this.consultationInformation = this.navParams.popBack();
    this.consultationID = this.navParams.popBack();
    this.mentorDetails = this.navParams.popBack();
  }

}
