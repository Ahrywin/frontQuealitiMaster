import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MyTaskComponent } from './dashboard/my-task/my-task.component';
import { ListasComponent } from './dashboard/listas/listas.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { NavbarComponent } from './layout/nav-var/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { UserSettingsComponent } from './dashboard/user-settings/user-settings.component';
import { GeneralSettingsComponent } from './dashboard/general-settings/general-settings.component';
@NgModule({
  declarations: [
    MyTaskComponent,
    ListasComponent,
    DashboardComponent,
    LayoutComponent,
    NavbarComponent,
    UserSettingsComponent,
    GeneralSettingsComponent
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class HomeModule { }
