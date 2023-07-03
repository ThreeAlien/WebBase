import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ReportManageComponent } from './report-manage/report-manage.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children:
      [
        { path: 'report-manage', component: ReportManageComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
