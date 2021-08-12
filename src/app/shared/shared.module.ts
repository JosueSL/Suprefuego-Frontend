import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
// PRIMENG - MENU
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent,
  ],
  exports: [
    FooterComponent,
    MenuComponent,],
  imports: [
    CommonModule,
    TabViewModule,
    DialogModule,
    ButtonModule
  ]
})
export class SharedModule { }
