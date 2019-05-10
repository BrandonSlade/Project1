import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginStatusSubject = new Subject<number>();
  public  $loginStatus = this.loginStatusSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): void {
    const payload = {
      username: username,
      password: password
    };

    this.httpClient.post('http://localhost:8080/Project_1/login', payload, {
        observe: 'response'
      }).subscribe(response => {
        sessionStorage.setItem('cache', response.body.toString());
        this.loginStatusSubject.next(200);
      }, err => {
        this.loginStatusSubject.next(err.status);
      });
  }
}
