import { Component } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridBlock} from '../gridBlock_component/gridBlock.component';
import {scaleChartModuleScale} from './scaleChartModuleScale';
import {bgColorModule} from '../bgColor_component/bgColor.module';
declare var $: any;

@Component({
    selector: 'view-scale-chart-module',
    templateUrl: 'assets/app/scale_chart_module/view-scale-chart.module.html',
    styleUrls: ['assets/app/scale_chart_module/scale-chart.module.css'],
    inputs: ['gE','module']
})

export class ViewScaleChartModule {
    gE:any;
    ngOnInit() {
        $("<style type='text/css'>.scale-chart-module input[type=range]::-webkit-slider-thumb{background:" + this.gE.csColor + "!important}</style>").appendTo($("head"));
    }
}
