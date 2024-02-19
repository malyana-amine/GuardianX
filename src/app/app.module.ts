import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppHttpInterceptor } from './services/appHttp/app-http.interceptor';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { ManagerComponent } from './components/manager/manager.component';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    NavbarComponent,
    NotAuthorizedComponent,
    DashboardComponent,
    ProfileComponent,
    AdminComponent,
    ManagerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [ 
    {provide : HTTP_INTERCEPTORS, useClass : AppHttpInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
