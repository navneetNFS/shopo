import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./front/front.module').then(m=> m.FrontModule)},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m=> m.AdminModule)},
  {path: 'bootstrap', loadChildren: () => import('./bootstrap/bootstrap.module').then(m=> m.BootstrapModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
