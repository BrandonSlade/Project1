import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { MainComponent } from './components/main/main.component';
import { ViewReimbcomponentComponent } from './components/view-reimb-component/view-reimbcomponent.component';
import { NewReimbComponentComponent } from './components/new-reimb-component/new-reimb-component.component';
import { ResolvePendingComponentComponent } from './components/resolve-pending-component/resolve-pending-component.component';

const routes: Routes = [
  {
    // localhost:4200/signup should render
    // the SignupComponent in the base
    // router-outlet
    path: 'signup',
    component: SignupComponent
  }, {
    path: 'login',
    component: LoginComponent,
  }, {
    path: '',
    component: MainComponent
  }, {
    path: 'main',
    component: MainComponent
  }, {
      path: 'chat',
      component: ChatComponent,
      children: [
        {
          path: 'view',
          component: ViewReimbcomponentComponent
        }, {
          path: 'new',
          component: NewReimbComponentComponent
        }, {
          path: 'resolve',
          component: ResolvePendingComponentComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
