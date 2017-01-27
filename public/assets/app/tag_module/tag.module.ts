import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock_component/gridBlock.component';
import { tagModuleTag } from './tagModuleTag';
import { bgColorModule } from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';
declare var $: any;

@Component({
    selector: 'tag-module',
    templateUrl: 'assets/app/tag_module/tag.module.html',
    styleUrls: ['assets/app/tag_module/tag.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class TagModule {
    bgColors:Array<string> = ['#4c7ba0','#ffffff','#ee4039','#f07171','#124666','#737373','#f8b13d','#00b5c8','#E3E5E6','#b05574'];
    customTagBgColor = '#E3E5E6';
    gridElements:Array<number>;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE:any,module:any) {
        this._cloneModuleService.cloneModule(gE,module);
    }

    deleteTagModule(gE:any,module:any) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    }

    addTag(gE:any,module:any) {
        var i,j;
        var maxId = 0;
        for(i=0;i<gE.modules.length;i++) {
            if(gE.modules[i].id == 5) {
                for(j=0;j<gE.modules[i].tags.length;j++) {
                    if(gE.modules[i].tags[j].id > maxId) {
                        maxId = gE.modules[i].tags[j].id;
                    }
                }
            }
        }
        module.tags.push(new tagModuleTag(maxId+1,'<p>New Tag</p>','#e3e5e6'));
    }

    deleteTag(module:any,tag:any) {
        module.tags.splice(module.tags.indexOf(tag), 1);
    }

    updateTag(tag:any) {
        $(document).off('click','.editable-tag').on('click','.editable-tag',function(){
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
                      tag.name = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',tag.color);
        });
    }

    tagBgColorToggle(tag:any) {
        var tagId = tag.id;
        $('.tag-bg-colors-list-' + tagId).toggle();
    }

    updateTagBgColor(tag:any) {
        if( this.customTagBgColor[0] != '#') {
            this.customTagBgColor = "#" +  this.customTagBgColor;
        };
        tag.color= this.customTagBgColor;
    }

    selectTagBgColor(tag:any,bgC:any) {
        tag.color = bgC;
    }

}
