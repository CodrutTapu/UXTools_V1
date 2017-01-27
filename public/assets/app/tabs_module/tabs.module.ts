import { Component, Input } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridBlock} from '../gridBlock_component/gridBlock.component';
import {tabsItem} from './tabsItem';
import {bgColorModule} from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';
declare var $: any;

@Component({
    selector: 'tabs-module',
    templateUrl: 'assets/app/tabs_module/tabs.module.html',
    styleUrls: ['assets/app/tabs_module/tabs.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class TabsModule {
    gridElements:Array<number>;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE:any,module:any) {
        this._cloneModuleService.cloneModule(gE,module);
    }

    deleteTabsModule(gE:any,module:any) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    }

    addTabsItem(gE:any,module:any) {
        var i,j;
        var maxId = 0;
        var new_items = [];
        for(i=0;i<gE.modules.length;i++) {
            if(gE.modules[i].id == 10) {
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
        module.items.push(new tabsItem('item' + maxId,'New Tab','<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien new.</p>'));
    }

    deleteTabsItem(module:any,item:any) {
        module.items.splice(module.items.indexOf(item), 1);
    }

    updateTabsItemContent(item:any,module:any) {
        $(document).off('click','.editable-tabs-item-content').on('click','.editable-tabs-item-content',function(){
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
            $(this).parent().find('.note-editable').css('background',module.bgColor);
        });
    }

    updateTabsItemTitle(item:any,event:any) {
        item.title = event.target.value;
    }

}
