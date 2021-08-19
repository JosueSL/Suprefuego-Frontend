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
        , redirectTo: `dashboard/${localStorage.getItem('motor')}`
        , pathMatch: 'full'
      },
      {
        path: 'dashboard'
        , loadChildren: () => import('./layout/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule)
      },
      {
        path: 'mantenimiento'
        , loadChildren: () => import('./layout/mantenimiento/mantenimiento-routing.module').then(m => m.MantenimientoRoutingModule)
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
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
