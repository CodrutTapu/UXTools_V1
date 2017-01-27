import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { bgColorModule } from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';
declare var $: any;

@Component({
    selector: 'counting-module',
    templateUrl: 'assets/app/counting_module/counting.module.html',
    styleUrls: ['assets/app/counting_module/counting.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class CountingModule {
    gridElements:Array<number>;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE:any,module:any) {
        this._cloneModuleService.cloneModule(gE,module);
    }

    deleteCountingModule(gE:any,module:any) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    }

    updateCountingValue(module:any) {
        $(document).off('click','.editable-counting-value').on('click','.editable-counting-value',function(){
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
                      module.content[0] = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',module.bgColor);
        });
    }

    updateCountingDescription(module:any) {
        $(document).off('click','.editable-counting-description').on('click','.editable-counting-description',function(){
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
                     module.content[1] = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',module.bgColor);
        });
    }

}
