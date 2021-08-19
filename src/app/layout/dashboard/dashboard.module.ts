import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
// ROUTING
import { DashboardRoutingModule } from './dashboard-routing.module';
// FUSIONCHARTS
import { FusionChartsModule } from "angular-fusioncharts";
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
// PRIMENG
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ChartModule } from 'primeng/chart';
//COMPONENTES
import { DashboardComponent } from './dashboard.component';
import { MdieselComponent } from './mdiesel/mdiesel.component';
import { MelectricoComponent } from './melectrico/melectrico.component';
import { HtanqueComponent } from './htanque/htanque.component';
import { HpresionComponent } from './hpresion/hpresion.component';

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme, Widgets);
@NgModule({
  declarations: [
    DashboardComponent,
    MdieselComponent,
    MelectricoComponent,
    HtanqueComponent,
    HpresionComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    LayoutModule,
    DashboardRoutingModule,
    TabMenuModule,
    FusionChartsModule,
    CardModule,
    ToastModule,
    InputSwitchModule,
    ButtonModule,
    SidebarModule,
    CalendarModule,
    SelectButtonModule,
    ChartModule
  ],
  providers: [MessageService]
})
export class DashboardModule { }
