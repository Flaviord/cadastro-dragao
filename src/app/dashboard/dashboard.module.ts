import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonDetailComponent } from './dragon-detail/dragon-detail.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { OrderByPipe } from '../services/orderby.pipe';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DragonDetailComponent, DashboardComponent, OrderByPipe]
})
export class DashboardModule { }
