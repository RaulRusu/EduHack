import { Injectable } from '@angular/core';
import { AuthServiceService} from './auth-service.service';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ConsultationsService {

  constructor(
      private authService: AuthServiceService,
      private database: AngularFireDatabase) { }

  getAllConsultations() {
    return this.database.object('consultations/');
  }

  bookConsultation(consultationID) {
    this.database.object('consultations/' + consultationID).update({userID: this.authService.getUserToken()});
  }

  getMentorInformation(mentorID) {
    return this.database.object('users/' + mentorID + '/details');
  }

  addConsultation(consultation) {
    this.database.list('consultations').push(consultation);
  }

  getAllUsers() {
    return this.database.object('users');
  }
}
