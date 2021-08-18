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
          icon: "assets/img/menu/dashboard.svg"
      },
      {
          label: 'MANTENIMIENTO',
          icon: "assets/img/menu/settings.png"
      },
      {
          label: 'ACERCA DE',
          icon: "assets/img/menu/about.png"
      }
  ];
  }
  
  showMenu() {
    this.displayMenu = true;
}

}
