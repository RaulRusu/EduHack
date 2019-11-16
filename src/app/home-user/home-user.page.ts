import { Component, OnInit } from '@angular/core';
import {RatingComponent} from 'ionic4-rating/dist';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.page.html',
  styleUrls: ['./home-user.page.scss'],
})
export class HomeUserPage implements OnInit {

  private domains;

  constructor() {
    this.domains = ['mathematics', 'chemistry', 'biology', 'informatics', 'history', 'geography', 'music', 'english', 'career'];
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
  }


}
