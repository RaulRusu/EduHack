import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private afAuth: AngularFireAuth,
              private dataBase: AngularFireDatabase) {}

  public login(email, pass) {
    this.afAuth.auth.signInWithEmailAndPassword(email, pass);
  }

  public register(email, pass, details) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, pass).then((data) => {
      console.log(this.getUserToken());
      this.setUserDetails(details);
    });
  }

  public setUserDetails(details) {
    this.dataBase.object('users/' + this.getUserToken()).update(details);
  }

  public logOut() {
    this.afAuth.auth.signOut();
  }

  public getUserToken() {
    return this.afAuth.auth.currentUser.uid;
  }

  public getAuthState() {
    return this.afAuth.authState;
  }
}
