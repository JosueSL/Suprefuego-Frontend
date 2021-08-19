import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  displayForm: boolean;
  constructor() {
    this.displayForm = false;
  }

  ngOnInit(): void {
  }

  showForm() {
    this.displayForm = true;
  }

}
