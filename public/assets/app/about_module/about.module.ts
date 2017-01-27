import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { aboutItem } from './aboutItem';
import { bgColorModule } from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';
declare var $: any;

@Component({
    selector: 'about-module',
    templateUrl: 'assets/app/about_module/about.module.html',
    styleUrls: ['assets/app/about_module/about.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class AboutModule {
    gridElements:Array<number>;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE:any,module:any) {
        this._cloneModuleService.cloneModule(gE,module);
    }

    deleteAboutModule(gE:any,module:any) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    }

    addAboutItem(module:any) {
        module.content.push(new aboutItem('<p>new item name</p>','<p>New item value</p>'));
    }

    deleteAboutItem(module:any,item:any) {
        module.content.splice(module.content.indexOf(item), 1);
    }

    updateAboutItemName(aI:any,module:any) {
        $(document).off('click','.editable-about-item-name').on('click','.editable-about-item-name',function(){
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
                      aI.name = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',module.bgColor);
        });
    }

    updateAboutItemValue(aI:any,module:any) {
        $(document).off('click','.editable-about-item-value').on('click','.editable-about-item-value',function(){
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
                      aI.value = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',module.bgColor);
        });
    }

}
