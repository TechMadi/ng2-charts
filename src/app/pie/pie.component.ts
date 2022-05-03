import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public pieChartOptions:ChartConfiguration['options']={
    responsive:true,
    layout:{
      padding:{
        left:50
      }
    }
   
  }
  public pieChartData:ChartData< 'pie',number[],string | string[]>={
    labels:[ [ 'Download Sales', ], [ 'In Store Sales',  ], 'Mail Sales'],
    datasets:[{
      data:[300,500,100]
    }]
  };
 
  public pieChartType:ChartType='pie'
  //public pieChartPlugins=[DataLabelsPlugin]
  public chartClicked = ($event: any) => {
    window.console.log('onChartHover', $event);
  };
 
  public chartHovered= ($event: any) => {
    window.console.log('onChartClick', $event);
  };
  constructor() { }

  ngOnInit(): void {
  }

}
