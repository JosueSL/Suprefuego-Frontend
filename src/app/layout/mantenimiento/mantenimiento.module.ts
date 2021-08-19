import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
// ROUTING
import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
// PRIMENG
import {TableModule} from 'primeng/table';
import { CardModule } from 'primeng/card';
import {SpeedDialModule} from 'primeng/speeddial';
//COMPONENTES
import { EmpresaComponent } from './empresa/empresa.component';
import { UnidadesComponent } from './unidades/unidades.component';
import { TipomotorComponent } from './tipomotor/tipomotor.component';
import { SenialesComponent } from './seniales/seniales.component';
import { TanqueComponent } from './tanque/tanque.component';
import { MantenimientoComponent } from './mantenimiento.component';
import { FormComponent } from './empresa/form/form.component';

@NgModule({
  declarations: [
    MantenimientoComponent,
    EmpresaComponent,
    UnidadesComponent,
    TipomotorComponent,
    SenialesComponent,
    TanqueComponent,
    FormComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    LayoutModule,
    MantenimientoRoutingModule,
    CardModule,
    TableModule,
    SpeedDialModule
  ],
  providers: []
})
export class MantenimientoModule { }
