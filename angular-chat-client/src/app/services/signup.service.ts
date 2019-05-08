import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) { }

  signup(username: string, password: string, firstname: string, lastname: string, email: string, role: number): Observable<any> {
    const payload = {
      username: username,
      password: password,
      first_name: firstname,
      last_name: lastname,
      email: email,
      role: role
    };
    return this.httpClient.post('http://localhost:8080/Project_1/SignUp', payload);
  }
}
