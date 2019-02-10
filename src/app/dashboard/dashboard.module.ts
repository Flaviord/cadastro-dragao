import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonDetailComponent } from './dragon-detail/dragon-detail.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DragonDetailComponent, DashboardComponent]
})
export class DashboardModule { }
