import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MdieselComponent } from './mdiesel/mdiesel.component';
import { MelectricoComponent } from './melectrico/melectrico.component';

const routes: Routes = [
    {
      path: '',
      component: DashboardComponent,
      children: [
        {
          path: 'electrico',
          component: MelectricoComponent
        },
        {
          path: 'diesel',
          component: MdieselComponent
        }
      ]
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {}