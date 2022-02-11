import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachesRoutingModule } from './coaches-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CoachesComponent } from './coaches.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    CoachesComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoachesRoutingModule
  ]
})
export class CoachesModule { }
