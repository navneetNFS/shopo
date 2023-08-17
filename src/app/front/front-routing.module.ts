import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front.component';
import { HomeComponent } from './component/home/home.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { TermAndConditionComponent } from './component/term-and-condition/term-and-condition.component';

const routes: Routes = [
  {
    path:'', component: FrontComponent,
    children: [
      {path:'',redirectTo:'/home', pathMatch:"full"},
      {path: 'home',component: HomeComponent},
      {path: 'products',component: ProductListComponent},
      {path: 'product-view',component: ProductViewComponent},
      {path: 'term-and-condition',component: TermAndConditionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
