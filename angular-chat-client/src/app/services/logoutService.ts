import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutserviceService {

  constructor() { }
  logalert()
  {
    alert('You are now logged out of ERS.');
    this.deleteSession();
  }
  deleteSession()
  {
    sessionStorage.removeItem('cache');
  }
}