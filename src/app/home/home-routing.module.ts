import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ExportComponent } from './report-manage/export/export.component';
import { ReportManageComponent } from './report-manage/report-manage.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children:
      [
        {path: 'report-manage', component: ReportManageComponent},
        {path: 'report-manage/export', component: ExportComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
