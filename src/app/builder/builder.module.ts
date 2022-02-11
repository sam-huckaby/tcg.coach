import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderRoutingModule } from './builder-routing.module';
import { SharedModule } from '../shared/shared.module';

import { BuilderComponent } from './builder.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    BuilderComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BuilderRoutingModule
  ]
})
export class BuilderModule { }
