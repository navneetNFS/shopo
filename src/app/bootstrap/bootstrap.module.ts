import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { BootstrapComponent } from './bootstrap.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    BootstrapComponent
  ],
  imports: [
    CommonModule,
    BootstrapRoutingModule,
    NgbRatingModule
  ],
  exports: [
    NgbRatingModule
  ]
})
export class BootstrapModule { }
