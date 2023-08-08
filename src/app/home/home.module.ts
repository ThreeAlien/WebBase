import { MatSortModule } from '@angular/material/sort';
import { AsideComponent } from './aside/aside.component';
import { TopComponent } from './top/top.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ReportManageComponent } from './report-manage/report-manage.component';
import { ExportComponent } from './report-manage/export/export.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    HomeComponent,
    TopComponent,
    AsideComponent,
    ReportManageComponent,
    ExportComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatMenuModule,
    MatCardModule

  ]
})
export class HomeModule { }
