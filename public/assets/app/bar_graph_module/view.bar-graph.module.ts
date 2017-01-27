import { Component, Input } from '@angular/core';
import { GridBlock } from '../gridBlock_component/gridBlock.component';
import { barGraphBar } from './barGraphBar';
import { bgColorModule } from '../bgColor_component/bgColor.module';
declare var $: any;

@Component({
    selector: 'view-bar-graph-module',
    templateUrl: 'assets/app/bar_graph_module/view.bar-graph.module.html',
    styleUrls: ['assets/app/bar_graph_module/bar-graph.module.css'],
    inputs: ['gE','module']
})

export class ViewBarGraphModule {}
