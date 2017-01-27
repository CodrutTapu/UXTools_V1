import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock_component/gridBlock.component';
declare var $: any;

@Component({
    selector: 'colorScheme-module',
    templateUrl: 'assets/app/colorScheme_component/colorScheme.module.html',
    styleUrls:  ['assets/app/colorScheme_component/colorScheme.module.css'],
    inputs: ['gridElements']
})

export class colorSchemeModule {

    gridElements:any;
    customCsColor = '#FFFFFF';
    schemeColors:Array<string> = ['#4c7ba0','#ffffff','#ee4039','#f07171','#124666','#737373','#f8b13d','#00b5c8','#81bda4','#b05574'];
    customSchemeColor = "#FFFFFF";

    schemeColorsListToggle() {
        $('.scheme-colors-list').toggle();
    }

    updateCsColor() {
        if( this.customCsColor[0] != '#') {
            this.customCsColor = "#" +  this.customCsColor;
        };
        var i;
        for (i = 0; i < this.gridElements.length; i++) {
            this.gridElements[i].csColor = this.customCsColor;
        }
        $("<style type='text/css'>.scale-chart-module input[type=range]::-webkit-slider-thumb{background:" + this.customCsColor + "!important}</style>").appendTo($("head"));
    }

    selectColorSchemeColor(sC:any) {
        var i;
        for (i = 0; i < this.gridElements.length; i++) {
            this.gridElements[i].csColor = sC;
        }
        $("<style type='text/css'>.scale-chart-module input[type=range]::-webkit-slider-thumb{background:" + sC + "!important}</style>").appendTo($("head"));
    }

}
