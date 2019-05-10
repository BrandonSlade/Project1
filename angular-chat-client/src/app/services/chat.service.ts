import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private RequestReimbSubject = new Subject<number>();
  public  $requestReimbStatus = this.RequestReimbSubject.asObservable();
  private ManagerSubject = new Subject<number>();
  public  $managerStatus = this.ManagerSubject.asObservable();
  private ResolveReimbSubject = new Subject<number>();
  public  $resolveReimbStatus = this.ResolveReimbSubject.asObservable();
  reimbRequestData;
  managerData;
  resolveRequestData;

  amount = '';
  constructor(private httpClient: HttpClient) { }

  Request(): void {
    this.httpClient.get('http://localhost:8080/Project_1/ViewReimb', {
        observe: 'response'
      }).subscribe(response => {
          this.RequestReimbSubject.next(200);
          this.reimbRequestData = response.body;
      }, err => {

      });
  }

  CreateNewDo(amount: string, description: string, managerId: number, reimbType: number): void {
      const payload = {
        amount: amount,
        description: description,
        managerId: managerId,
        reimbType: reimbType
      };

      this.httpClient.post('http://localhost:8080/Project_1/CreateNew', payload, {
          observe: 'response'
        }).subscribe(response => {

        }, err => {

        });
  }

  CreateNewGet(): void {
    this.httpClient.get('http://localhost:8080/Project_1/CreateNew', {
        observe: 'response'
      }).subscribe(response => {
        this.ManagerSubject.next(200);
        this.managerData = response.body;
      }, err => {

      });
  }

  ResolvePending(reimbId: number, reimbStatus: number): void {
      const payload = {
        reimbId: reimbId,
        reimbStatus: reimbStatus
      };

      this.httpClient.post('http://localhost:8080/Project_1/UpdateServlet', payload, {
        observe: 'response'
      }).subscribe(response => {

      }, err => {

      });
  }

  ResolveRequest() {
    this.httpClient.get('http://localhost:8080/Project_1/UpdateServlet', {
        observe: 'response'
      }).subscribe(response => {
        this.ResolveReimbSubject.next(200);
        this.resolveRequestData = response.body;
      }, err => {

      });
  }

}
