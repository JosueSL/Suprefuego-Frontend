import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-htanque',
  templateUrl: './htanque.component.html',
  styleUrls: ['./htanque.component.scss']
})
export class HtanqueComponent implements OnInit {

  basicData: any;
  dataSource: any;
  rangeDates: Date[];
  constructor() { }

  ngOnInit(): void {
    this.dataSource = {
      chart: {
          theme: "fusion",
          caption: "Agua",
          subCaption: "2021-01-01 - 2021-07-31",
          xAxisName: "Tiempo",
          yAxisName: "Nivel de tanque",
          palettecolors: "00aeef"
      },
      data: [{
              label: "Ene",
              value: "95"
          },
          {
              label: "Feb",
              value: "50"
          },
          {
              label: "Mar",
              value: "70"
          },
          {
              label: "Abr",
              value: 80
          },
          {
              label: "May",
              value: 60
          },
          {
              label: "Jun",
              value: 100
          },
          {
              label: "Jul",
              value: 80
          }
      ]};
  }

}
