import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;
  indexActive: number;
  constructor() { 
    this.indexActive=0;
  }

  ngOnInit(): void {    
    this.items = [
      {label: 'Electrico', icon: 'pi pi-fw pi-home', routerLink: ['electrico']},
      {label: 'Diesel', icon: 'pi pi-fw pi-cog', routerLink: ['diesel']}
  ];
  }

}
