import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule
  ]
})
export class LayoutModule { }
