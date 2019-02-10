import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragonRestService } from './services/dragon-rest.service';
import { DragonService } from './services/dragon.service';
import { HttpModule } from '@angular/http';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpConfigInterceptor } from './interceptors/http-config.interceptor';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes, Router} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginModule } from './login/login.module';


const appRoutes: Routes = [
  {
    path: 'login', component: LoginComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login' , component: LoginComponent
  }

];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    LoginModule
  ],
  providers: [ DragonRestService, DragonService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpConfigInterceptor,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
