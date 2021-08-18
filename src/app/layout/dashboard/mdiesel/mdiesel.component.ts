import { Component, OnInit, AfterViewInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import * as moment from 'moment';

moment.locale('es');

@Component({
  selector: 'app-melectrico',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mdiesel.component.html',
  styleUrls: ['./mdiesel.component.scss']
})
export class MdieselComponent implements OnInit, AfterViewInit, OnDestroy {

  tanqueAgua: any;
  presionSistema: any;
  estadoMotor: any;
  time: string;
  // CYLINDER
  widthCylinder: string;
  // CDK - LAYOUT
  destroyed = new Subject<void>();
  currentScreenSize: string;
  // DOM
  @ViewChild("divCylinder", { static: false }) divCylinder: ElementRef;
  @ViewChild("divGauge", { static: false }) divGauge: ElementRef;
  @ViewChild("divMotor", { static: false }) divMotor: ElementRef;
  @ViewChild("divBomba", { static: false }) divBomba: ElementRef;
  // VARIABLES
  ioMotor: number = 1;
  ioBomba: number = 1;
  stateOptions: any[];
  showHpresion: boolean;
  showHtanque: boolean;
  engineRun: boolean;
  errorMotor: boolean;
  errorTanque: boolean;
  errorPresion: boolean;
  errorBomba: boolean;

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge']
  ]);
  constructor(private breakpointObserver: BreakpointObserver
    , private cd: ChangeDetectorRef
    , private messageService: MessageService) {
    this.engineRun = false;
    this.errorMotor = true;
    this.errorTanque = true;
    this.errorPresion = true;
    this.errorBomba = true;
  }

  ngOnInit() {
    this.stateOptions = [{label: 'ON', value: 1}, {label: 'OFF', value: 0}];
    this.time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a").toString();
    console.log(moment());
    this.showCylinder('100%');
    this.showGauge();
    this.showGaugeState();
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).pipe(takeUntil(this.destroyed)).subscribe(result => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';

          switch (this.currentScreenSize) {
            case 'XSmall':
              this.widthCylinder = '100%';
              this.cd.detectChanges();
              break;
            case 'Small':
              this.widthCylinder = '50%';
              this.cd.detectChanges();
              break;
            case 'Medium':
              this.widthCylinder = '75%';
              this.cd.detectChanges();
              break;
            case 'Large':
              this.widthCylinder = '85%';
              this.cd.detectChanges();
              break;
            case 'XLarge':
              this.widthCylinder = '100%'
              this.cd.detectChanges();
              break;
          }
        }

      }
    });
  }

  ngAfterViewInit() {
    console.log("afterinit");
    this.messageService.add({ key: 'myKey1', severity: 'warn', summary: 'Summary Text', detail: 'Detail Text', sticky: true });
    /*setTimeout(() => {
      this.renderer.addClass(this.divCylinder.nativeElement, 'border-danger');
      this.renderer.addClass(this.divGauge.nativeElement, 'border-danger');
      this.renderer.addClass(this.divMotor.nativeElement, 'border-danger');
      this.renderer.addClass(this.divBomba.nativeElement, 'border-danger');
    }, 1000);*/
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  showHisTanque() {
    this.showHtanque = true;
  }

  showHisPresion() {
    this.showHpresion = true;
  }

  cambiarDatos() {
    this.tanqueAgua.value = Math.random() * 1000;
    console.log(this.tanqueAgua.value * 1000);
  }

  showCylinder(size: string) {
    this.tanqueAgua = {
      renderAt: 'chart-container',
      chart: {
        baseFontColor: "#000",
        baseFontSize: "13",
        caption: 'Nivel de tanque de agua',
        captionFontBold: "4",
        lowerLimit: "0",
        upperLimit: 100,
        lowerLimitDisplay: "0 %",
        upperLimitDisplay: "" + 100 + " %",
        numberSuffix: " %",
        showValue: 100,
        showhovereffect: "1",
        bgColor: "#FCFCFC",
        borderAlpha: "0",
        cylFillcolor: "#008ee4",
        autoScale: 1
      },
      value: 0
    };


  }

  showGauge() {
    this.presionSistema = {
      chart: {
        caption: "Presion del sistema",
        lowerLimit: "0",
        upperLimit: "300",
        theme: "fusion",
        showValue: "1",
        baseFontSize: "15"
      },
      colorRange: {
        color: [{
          minValue: "0",
          maxValue: "300",
          code: "#008ee4"
        }]
      },
      dials: {
        dial: [{
          value: "0"
        }]
      }
    }
  }

  showGaugeState() {
    this.estadoMotor = {
      chart: {
        lowerLimit: "0",
        upperLimit: "9",
        theme: "fusion",
        showValue: "0",
        baseFontSize: "15",
        gaugeStartAngle: "135",
        gaugeEndAngle: "45",
        gaugeOriginX: "195",
        gaugeOriginY: "280",
        gaugeOuterRadius: "200",
        showTickMarks: "0",
        showTickValues: "0"
      },
      colorRange: {
        color: [
          {
            minValue: "0",
            maxValue: "3",
            label: "Apagado"
          },
          {
            minValue: "3",
            maxValue: "6",
            label: 'Automatico'
          },
          {
            minValue: "6",
            maxValue: "9",
            label: 'Manual'
          }
        ]
      },
      pointers: {
        pointer: [{
          value: "4.5"
        }]
      }
    }
  }

}
