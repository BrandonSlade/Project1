import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resolve-pending-component',
  templateUrl: './resolve-pending-component.component.html',
  styleUrls: ['./resolve-pending-component.component.css']
})
export class ResolvePendingComponentComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  backToMain() {
    this.router.navigateByUrl('chat');
  }
}
