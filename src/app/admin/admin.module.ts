import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { AdminHeaderComponent } from './shared/admin-header/admin-header.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdminLoginComponent,
    AdminHeaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
