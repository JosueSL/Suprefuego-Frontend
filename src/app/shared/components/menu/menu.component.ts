import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  faCoffee = faCoffee;
  displayMenu = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  showMenu() {
    this.displayMenu = true;
}

}
