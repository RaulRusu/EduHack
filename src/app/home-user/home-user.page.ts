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

  private consultationsSorted: Array<any>;
  private consultationsKeysSorted: Array<any>;
  private mentorsInformationSorted: Array<any>;

  constructor(private consultationService: ConsultationsService,
              private navParams: NavParamsService,
              private router: Router) {
    this.domains = ['mathematics', 'chemistry', 'biology', 'informatics', 'history', 'geography', 'music', 'languages', 'career'];
    this.consultationsList = new Array<any>();
    this.consultationsKeys = new Array<any>();
    this.mentorsInformation = new Array<any>();
    this.consultationsListToShow = new Array<any>();
    this.consultationsKeysToShow = new Array<any>();
    this.mentorsInformationToShow = new Array<any>();
    this.consultationsSorted = new Array<any>();
    this.consultationsKeysSorted = new Array<any>();
    this.mentorsInformationSorted = new Array<any>();
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
      this.consultationsSorted = new Array<any>();
      this.consultationsKeysSorted = new Array<any>();
      this.mentorsInformationSorted = new Array<any>();
      const subs = this.consultationService.getAllUsers().valueChanges().subscribe((users) => {
        this.allUsers = users;
        subs.unsubscribe();
        for (const key in data) {
          if (data[key].status === 'free') {
            this.consultationsList.push(data[key]);
            this.consultationsKeys.push(key);
            this.mentorsInformation.push(this.allUsers[data[key].mentorID].details);
            this.consultationsSorted.push(data[key]);
            this.consultationsKeysSorted.push(key);
            this.mentorsInformationSorted.push(this.allUsers[data[key].mentorID].details);
          }
        }
        for ( var i = 0; i < this.mentorsInformationSorted.length - 1; i++) {
          for (var j = i + 1; j < this.mentorsInformationSorted.length; j++) {
            if (this.mentorsInformationSorted[i].rating < this.mentorsInformationSorted[j].rating) {
              let aux = this.consultationsSorted[j];
              this.consultationsSorted[j] = this.consultationsSorted[i];
              this.consultationsSorted[i] = aux;
              aux = this.consultationsKeysSorted[j];
              this.consultationsKeysSorted[j] = this.consultationsKeysSorted[i];
              this.consultationsKeysSorted[i] = aux;
              aux = this.mentorsInformationSorted[j];
              this.mentorsInformationSorted[j] = this.mentorsInformationSorted[i];
              this.mentorsInformationSorted[i] = aux;
            }
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
    } else if (this.filter !== 'sorted') {
      for (const i in this.consultationsList) {
        if (this.consultationsList[i].subject === this.filter) {
          this.consultationsListToShow.push(this.consultationsList[i]);
          this.consultationsKeysToShow.push(this.consultationsKeys[i]);
          this.mentorsInformationToShow.push(this.mentorsInformation[i]);
        }
      }
    } else {
      this.consultationsListToShow = this.consultationsSorted;
      this.consultationsKeysToShow = this.consultationsKeysSorted;
      this.mentorsInformationToShow = this.mentorsInformationSorted;
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

  goToConsultationSortedPage(i) {
    this.navParams.pushBack(this.mentorsInformationSorted[i]);
    this.navParams.pushBack(this.consultationsKeysSorted[i]);
    this.navParams.pushBack(this.consultationsSorted[i]);
    this.router.navigate(['/consultation']);
  }

  showMoreSorted() {
    this.filter = 'sorted';
    this.filterDataBySearch();
  }
}
