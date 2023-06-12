import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsideComponent} from './home/about/aside.component';
import { HomeComponent } from './home/home.component';
import { TopComponent } from './home/product/top.component';


const routes: Routes = [
  // 當路徑是空的時候轉址到 home
  {
    path: "", redirectTo: "/home",pathMatch: "full"
  },
  { path: "",component: HomeComponent },
  { path: 'p1', component: LoginComponent },
    // data:{
    //   title:"首頁"
    // },
    // children: [
    //   {
    //     path:"",
    //     component: HomeComponent
    //   },
    //   {
    //     path: 'about',
    //     component: AsideComponent,
    //   },
    //   {
    //     path: 'top',
    //     component: TopComponent,
    //   },
    // ]
  //},
  {
    path: "**", component: HomeComponent, // 萬用路徑，路由沒有比對到，永遠會執行
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
