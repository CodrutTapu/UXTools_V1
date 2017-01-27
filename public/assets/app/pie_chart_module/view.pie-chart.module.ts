import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock_component/gridBlock.component';
import { bgColorModule } from '../bgColor_component/bgColor.module';
declare var $: any;
declare var Chart:any;

@Component({
    selector: 'view-pie-chart-module',
    templateUrl: 'assets/app/pie_chart_module/view-pie-chart.module.html',
    styleUrls: ['assets/app/pie_chart_module/pie-chart.module.css'],
    inputs: ['gE','module']
})

export class ViewPieChartModule {
    gE:any;
    module:any;
    ngAfterViewInit() {
        var ctx = document.getElementById("pieChart" + this.module.pieId + this.gE.id);
        var pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: this.module.labels,
                datasets: [{
                    data: this.module.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(191, 63, 127, 0.2)',
                        'rgba(38, 12, 12, 0.2)',
                        'rgba(3, 124, 21, 0.2)',
                        'rgba(242, 230, 63, 0.2)'

                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(191, 63, 127, 1)',
                        'rgba(38, 12, 12, 1)',
                        'rgba(3, 124, 21, 1)',
                        'rgba(242, 230, 63, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            showScale: false
        });
    }
}
