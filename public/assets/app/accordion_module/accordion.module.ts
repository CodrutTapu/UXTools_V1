import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock_component/gridBlock.component';
import { accordionItem } from './accordionItem';
import { bgColorModule } from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';
declare var $: any;

@Component({
    selector: 'accordion-module',
    templateUrl: 'assets/app/accordion_module/accordion.module.html',
    styleUrls: ['assets/app/accordion_module/accordion.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class AccordionModule {
    gridElements:Array<number>;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE:any,module:any) {
        this._cloneModuleService.cloneModule(gE,module);
    }

    ngOnInit() {
        $('.accordion-module').on('show.bs.collapse','.collapse', function() {
            $(this).parents().eq(2).find('.collapse.in').collapse('hide');
        });
    }

    deleteAccordionModule(gE:any,module:any) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    }

    addAccordionItem(gE:any,module:any) {
        var i,j;
        var maxId = 0;
        for(i=0;i<gE.modules.length;i++) {
            if(gE.modules[i].id == 9) {
                for(j=0;j<gE.modules[i].items.length;j++) {
                    if(gE.modules[i].items[j].id.length == 5) {
                        if(parseInt(gE.modules[i].items[j].id[4]) > maxId) {
                            maxId = parseInt(gE.modules[i].items[j].id[4]);
                        }
                    } else if(gE.modules[i].items[j].id.length  == 6){
                        if(parseInt(gE.modules[i].items[j].id[4] + gE.modules[i].items[j].id[5]) > maxId) {
                            maxId = parseInt(gE.modules[i].items[j].id[4] + gE.modules[i].items[j].id[5]);
                        }
                    }
                }
            }
        }
        maxId++;
        module.items.push(new accordionItem('item' + maxId,'New Item Title','<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>'));
    }

    deleteAccordionItem(module:any,item:any) {
        module.items.splice(module.items.indexOf(item), 1);
    }

    updateAccordionTitle(module:any) {
        $(document).off('click','.editable-accordion-title').on('click','.editable-accordion-title',function(){
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

    updateAccordionItemTitle(item:any,event:any) {
        item.title = event.target.value;
    }

    updateAccordionItemContent(item:any) {
        $(document).off('click','.editable-accordion-item-content').on('click','.editable-accordion-item-content',function(){
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
                      item.content = contents;
                    }
                }
            });
        });
    }

}
