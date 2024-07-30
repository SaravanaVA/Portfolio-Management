import { Component, OnInit } from '@angular/core';

import { ChartService } from './service/chart.service';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    public companiesList: string[];
    public currentMarketValueList: number[];
    public currentMarketValue: number;
    public alertList = [];

    public totalInvestedValue: number;
    public pieChartType: string = 'pie';

    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
    };

    public percentageChange;

    public barChartData: any[] = [
        { data: [], label: 'Buy price' },
        { data: [], label: 'Current price' },
    ];
    constructor(private chartService: ChartService) {}

    ngOnInit(): void {
        let chartData = this.chartService.getStocksDetails();

        this.companiesList = chartData.stocks;
        this.barChartData[0].data = chartData.buyPrice;
        this.barChartData[1].data = chartData.currrentMarketPrice;
        this.currentMarketValueList = chartData.currrentMarketPrice;
        this.currentMarketValue = chartData.currrentMarketPrice.reduce(
            (acc, cuurrentVal) => acc + cuurrentVal,
            0
        );

        this.totalInvestedValue = chartData.buyPrice.reduce(
            (acc, cuurrentVal) => acc + +cuurrentVal,
            0
        );

        this.alertList = chartData.alertList;

        this.percentageChange =
            Math.round(
                (1 - this.totalInvestedValue / this.currentMarketValue) * 100
            ) / 100;
    }

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }
}
