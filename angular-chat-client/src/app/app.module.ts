import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { SignupService } from './services/signup.service';
import { FormsModule } from '@angular/forms';
import { TrimPipePipe } from './pipes/trim-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { ViewReimbcomponentComponent } from './components/view-reimb-component/view-reimbcomponent.component';
import { NewReimbComponentComponent } from './components/new-reimb-component/new-reimb-component.component';
import { ResolvePendingComponentComponent } from './components/resolve-pending-component/resolve-pending-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ChatComponent,
    TrimPipePipe,
    MainComponent,
    ViewReimbcomponentComponent,
    NewReimbComponentComponent,
    ResolvePendingComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SignupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
