import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock_component/gridBlock.component';
import { bgColorModule } from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';
declare var $: any;
declare var Chart:any;

@Component({
    selector: 'pie-chart-module',
    templateUrl: 'assets/app/pie_chart_module/pie-chart.module.html',
    styleUrls: ['assets/app/pie_chart_module/pie-chart.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class PieChartModule {
    gridElements:Array<number>;
    gE:any;
    module:any;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE:any,module:any) {
        this._cloneModuleService.cloneModule(gE,module);
    }

    deletePieChartModule(gE:any,module:any) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    }

    addPieSegment(module:any) {
        module.labels.push("");
        module.data.push("");
    }

    removePieSegment(module:any,dt:any) {
        module.labels.splice(module.data.indexOf(dt), 1);
        module.data.splice(module.data.indexOf(dt), 1);
    }

    lbUpdate(event:any,lb:any,module:any) {
        if( event.target.value < 0 ) {
            module.labels[module.labels.indexOf(lb)] = - event.target.value;
        } else {
            module.labels[module.labels.indexOf(lb)] = event.target.value;
        }
    }

    dtUpdate(event:any,dt:any,module:any) {
        if( event.target.value < 0 ) {
            module.data[module.data.indexOf(dt)] = - event.target.value;
        } else {
            module.data[module.data.indexOf(dt)] = event.target.value;
        }
    }

    createNewPieChart(gE:any,module:any) {
            var pcModule = $('.pie-chart-module');
            $('#pieChart' + module.pieId + gE.id).remove();
            $('.pie-chart-content' + module.pieId + gE.id).append("<canvas id='pieChart" + module.pieId + gE.id + "' width='400' height='400'></canvas>");
            var ctx = document.getElementById("pieChart" + module.pieId + gE.id);
            var pieChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: module.labels,
                    datasets: [{
                        data: module.data,
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
            pcModule.find('.pie-chart-content').stop().show(200);
            pcModule.find('.create-pie-chart-box').stop().hide(200);
    }

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

    updatePieTitle(module:any) {
        $(document).off('click','.editable-pie-title').on('click','.editable-pie-title',function(){
            $(this).summernote({
                airMode: true,
                popover: {
                    air: [
                        ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                    ]
                },
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents:any, $editable:any) {
                      module.title = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',module.bgColor);
        });
    }

}
