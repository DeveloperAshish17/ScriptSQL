import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatabaseComponent } from './database/database.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    DatabaseComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TabViewModule,
    DialogModule,

  ]
})
export class PagesModule { }
