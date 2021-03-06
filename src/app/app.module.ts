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
import { LoginService } from './services/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DragonDetailComponent } from './dashboard/dragon-detail/dragon-detail.component';
import { CreateDragonComponent } from './dashboard/create-dragon/create-dragon.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';



const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: '', component: AppComponent, canActivate: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login' , component: LoginComponent } ,
  { path: 'detail/:id', component: DragonDetailComponent},
  { path: 'create', component: CreateDragonComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateDragonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    LoginModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ DragonRestService, DragonService, AuthGuard, LoginService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpConfigInterceptor,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
