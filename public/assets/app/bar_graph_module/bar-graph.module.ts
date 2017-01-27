import { Component, Input } from '@angular/core';
import { GridBlock } from '../gridBlock_component/gridBlock.component';
import { barGraphBar } from './barGraphBar';
import { bgColorModule } from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';
declare var $: any;

@Component({
    selector: 'bar-graph-module',
    templateUrl: 'assets/app/bar_graph_module/bar-graph.module.html',
    styleUrls: ['assets/app/bar_graph_module/bar-graph.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class BarGraphModule {
    gridElements:Array<number>;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE:any,module:any) {
        this._cloneModuleService.cloneModule(gE,module);
    }

    deleteBarGraphModule(gE:any,module:any) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    }

    addBarGraph(module:any) {
       module.bars.push(new barGraphBar(50,'<p>New Label</p>'));
   }

    deleteBar(module:any,bar:any) {
        module.bars.splice(module.bars.indexOf(bar), 1);
    }

    adjustBarLength(event:any,bar:any) {
        var pBLength = $('.progress').width();
        bar.value = Math.ceil((event.layerX*100)/pBLength);
    }

    updateBarGraphTitle(module:any) {
       $(document).off('click','.editable-barGrpah-title').on('click','.editable-barGrpah-title',function(){
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

    updateBarLabel(bar:any,module:any) {
       $(document).off('click','.editable-bar-label').on('click','.editable-bar-label',function(){
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
                     bar.label = contents;
                   }
               }
           });
           $(this).parent().find('.note-editable').css('background',module.bgColor);
       });
    }

}
