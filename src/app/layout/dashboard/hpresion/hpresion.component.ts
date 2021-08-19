import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hpresion',
    templateUrl: './hpresion.component.html',
    styleUrls: ['./hpresion.component.scss']
})
export class HpresionComponent implements OnInit {

    dataSource: any;
    rangeDates: Date[];
    
    constructor() {
    }


    ngOnInit(): void {
        this.dataSource = {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Presion',
                    data: [65, 59, 70, 65, 56, 55],
                    borderColor: '#42A5F5',
                    backgroundColor: 'rgba(0,174,239,.5)'
                }
            ]
        };
    }

}
