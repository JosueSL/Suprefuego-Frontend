import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hpresion',
  templateUrl: './hpresion.component.html',
  styleUrls: ['./hpresion.component.scss']
})
export class HpresionComponent implements OnInit {

  basicData: any;
  dataSource: any;
  rangeDates: Date[];
  chart: any;
  constructor() {
   }


  ngOnInit(): void {
      this.dataSource = {
        chart: {
            theme: "fusion",
            caption: "Presion",
            subCaption: "2021-01-01 - 2021-07-31",
            xAxisName: "Tiempo",
            yAxisName: "Presion del sistema",
        },
        data: [{
                label: "Ene",
                value: 95
            },
            {
                label: "Feb",
                value: 50
            },
            {
                label: "Mar",
                value: 70
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
