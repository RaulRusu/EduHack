import { Component, OnInit } from '@angular/core';
import {RatingComponent} from 'ionic4-rating/dist';
import {ConsultationsService} from '../consultations.service';
import {NavParamsService} from '../nav-params.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.page.html',
  styleUrls: ['./home-user.page.scss'],
})
export class HomeUserPage implements OnInit {
  private filter;
  private domains;
  private consultationsList: Array<any>;
  private consultationsKeys: Array<any>;
  private mentorsInformation: Array<any>;
  private allUsers;

  private consultationsListToShow: Array<any>;
  private consultationsKeysToShow: Array<any>;
  private mentorsInformationToShow: Array<any>;
  constructor(private consultationService: ConsultationsService,
              private navParams: NavParamsService,
              private router: Router) {
    this.domains = ['mathematics', 'informatics', 'biology'];
    this.consultationsList = new Array<any>();
    this.consultationsKeys = new Array<any>();
    this.mentorsInformation = new Array<any>();
    this.consultationsListToShow = new Array<any>();
    this.consultationsKeysToShow = new Array<any>();
    this.mentorsInformationToShow = new Array<any>();
    this.filter = '';
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

  ngOnInit() {
    this.consultationService.getAllConsultations().valueChanges().subscribe((data) => {
      this.consultationsList = new Array<any>();
      this.consultationsKeys = new Array<any>();
      this.mentorsInformation = new Array<any>();
      const subs = this.consultationService.getAllUsers().valueChanges().subscribe((users) => {
        this.allUsers = users;
        subs.unsubscribe();
        for (const key in data) {
          if (data[key].status === 'free') {
            this.consultationsList.push(data[key]);
            this.consultationsKeys.push(key);
            this.mentorsInformation.push(this.allUsers[data[key].mentorID].details);
          }
        }
        this.filterDataBySearch();
      });
    });
  }

  filterDataBySearch() {
    this.consultationsListToShow = new Array<any>();
    this.consultationsKeysToShow = new Array<any>();
    this.mentorsInformationToShow = new Array<any>();
    if (this.filter === '') {
      this.consultationsKeysToShow = this.consultationsKeys;
      this.consultationsListToShow = this.consultationsList;
      this.mentorsInformationToShow = this.mentorsInformation;
    } else {
      for (const i in this.consultationsList) {
        if (this.consultationsList[i].subject === this.filter) {
          this.consultationsListToShow.push(this.consultationsList[i]);
          this.consultationsKeysToShow.push(this.consultationsKeys[i]);
          this.mentorsInformationToShow.push(this.mentorsInformation[i]);
        }
      }
    }
  }

  goToConsultationPage(i) {
    this.navParams.pushBack(this.mentorsInformationToShow[i]);
    this.navParams.pushBack(this.consultationsKeysToShow[i]);
    this.navParams.pushBack(this.consultationsListToShow[i]);
    this.router.navigate(['/consultation']);
  }

  onInputSearchBar($event) {
    this.filterDataBySearch();
  }

  setSearchToSubject(domain) {
    this.filter = domain;
  }
}
