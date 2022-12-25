import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './home/product/product.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full", // 當路徑是空的時候轉址到 home
  },
  {
    path: "",
    component: HomeComponent,
    data:{
      title:"首頁"
    },
    children: [
      {
        path:"",
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
    ]
  },
  {
    path: "**", component: HomeComponent, // 萬用路徑，路由沒有比對到，永遠會執行
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
