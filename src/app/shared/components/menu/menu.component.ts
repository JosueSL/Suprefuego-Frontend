import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dockItems: MenuItem[];
  displayMenu = false;
  constructor() { }

  ngOnInit(): void {
    this.dockItems = [
      {
        label: 'DASHBOARD',
        tooltipOptions: {
          tooltipLabel: "Dashboard",
          tooltipPosition: 'left',
          positionTop: -15,
          positionLeft: 15
        },
        routerLink:'dashboard/'+localStorage.getItem('motor'),
        icon: "assets/img/menu/dashboard.svg"
      },
      {
        label: 'MANTENIMIENTO',
        tooltipOptions: {
          tooltipLabel: "Mantenimiento",
          tooltipPosition: 'left',
          positionTop: -15,
          positionLeft: 15
        },
        routerLink: 'mantenimiento/empresa',
        icon: "assets/img/menu/settings.png"
      },
      {
        label: 'REPORTES',
        tooltipOptions: {
          tooltipLabel: "Reportes",
          tooltipPosition: 'left',
          positionTop: -15,
          positionLeft: 15
        },
        routerLink: 'dashboard/'+localStorage.getItem('motor'),
        icon: "assets/img/menu/report.png"
      },
      {
        label: 'ACERCA DE',
        tooltipOptions: {
          tooltipLabel: "Acerca de",
          tooltipPosition: 'left',
          positionTop: -15,
          positionLeft: 15
        },
        routerLink:'dashboard/'+localStorage.getItem('motor'),
        icon: "assets/img/menu/about.png"
      },
      {
        label: 'CERRAR SESIN',
        tooltipOptions: {
          tooltipLabel: "Cerras sesion",
          tooltipPosition: 'left',
          positionTop: -15,
          positionLeft: 15
        },
        routerLink:'dashboard/'+localStorage.getItem('motor'),
        icon: "assets/img/menu/io.png"
      }
    ];
  }

  showMenu() {
    this.displayMenu = true;
  }

}
