import { Component, OnInit } from '@angular/core';
import { ProyectosService } from "../Services/proyectos.service";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';

export type ChartOptions = {
  chart: ApexChart;
  series: ApexAxisChartSeries | any[];
  stroke: ApexStroke;
  markers: ApexMarkers;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  colors: string[];
  labels: string[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  fill: ApexFill;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})

export class ActividadPage implements OnInit {
  gananciasPorProyectos = []
  gananciasTotales = []
  manoObraTotales = []
  materialesTotales = []
  nombresProyecto = []
  Totaltareas = []
  jefesOgerentes: Number
  personalNormal: Number
  proyectosActivos: Number
  totalPersonal: Number
  public options: Partial<ChartOptions>;
  public radial: Partial<ChartOptions>
  constructor(public proyectoS: ProyectosService) {
 
  }

  ngOnInit() {
    this.obtenerEstadisticas()
    this.chart1()
    this.chart2()
  }

  chart1(){
    this.options = {
      series: [{
        name:'Mano de obra',
        data: this.manoObraTotales
      },{
        name:'ganancias',
        data: this.gananciasTotales
      },{
        name:'Materiales',
        data: this.materialesTotales
      }],
        chart: {
        height: 350,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        },
      },
      
      xaxis: {
        categories: ['test', 'test2.1', 'test3']
      },
      plotOptions: {
        bar: {
          columnWidth: '30%'
        }
      },
      colors: ['#DE2B2B', '#2BDE3E', '#1C73CF'],
      dataLabels: {
        enabled: true
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Mano de obra', 'Ganancias', 'Materiales'],
        markers: {
          fillColors: ['#DE2B2B', '#2BDE3E', '#1C73CF']
        }
      }
    };

    console.log(this.manoObraTotales);

  }
  
  chart2(){
    this.radial = {
      series: this.Totaltareas,
      chart: {
      type: 'donut',
    },
    labels: ['Completadas', 'Pendientes'],
    colors: ['#2BDE3E', '#DE2B2B'],

  }
  console.log(this.Totaltareas);
  
}

  obtenerEstadisticas(){
    this.proyectoS.estadisticasGenerales().subscribe((res: any)=>{
      this.gananciasPorProyectos = res.gananciasPorProyectos
      this.jefesOgerentes = res.jefesOgerentes
      this.personalNormal = res.personalNormal
      this.proyectosActivos = res.proyectosActivos
      this.totalPersonal = res.totalPersonal

      console.log(res);
      res.tareasTotales.forEach((element)=>{
        this.Totaltareas.push(element)
      })

      this.gananciasPorProyectos.forEach((element)=>{
        this.gananciasTotales.push(element.ganacias)
        this.manoObraTotales.push(element.manoObra)
        this.materialesTotales.push(element.materiales)
        this.nombresProyecto.push(element.proyecto)
      })      

    },err=>{
      console.log(err);
      
    })
  }
}
