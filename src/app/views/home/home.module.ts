import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MyTaskComponent } from './dashboard/my-task/my-task.component';
import { ListasComponent } from './dashboard/listas/listas.component';
import { DashboardsComponent } from './dashboard/dashboards/dashboards.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MyTaskComponent,
    ListasComponent,
    DashboardsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule
  ]
})
export class HomeModule { }
