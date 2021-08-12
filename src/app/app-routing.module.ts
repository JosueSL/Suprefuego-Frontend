import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: ''
    , component: LayoutComponent
    , children: [
      {
        path: ''
        , redirectTo: `inicio/${localStorage.getItem('motor')}`
        , pathMatch: 'full'
      },
      {
        path: 'inicio'
        , loadChildren: () => import('./layout/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/Notfound',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
