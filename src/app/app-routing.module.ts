import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path: 'login',
  loadChildren: () => import ('./views/login/login.module').then (m=> m.LoginModule)
},
{
  path: 'tasks',
  loadChildren: () => import ('./views/home/home.module').then (m=> m.HomeModule)
}


// Otras rutas si las tienes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
