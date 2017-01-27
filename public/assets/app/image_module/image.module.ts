import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock_component/gridBlock.component';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';

@Component({
    selector: 'image-module',
    templateUrl: 'assets/app/image_module/image.module.html',
    styleUrls: ['assets/app/image_module/image.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class ImageModule {
    gridElements:Array<number>;
    imageUrl:any;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE:any,module:any) {
        this._cloneModuleService.cloneModule(gE,module);
    }

    deleteImageModule(gE:any,module:any) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    }

    changeImageUrl(module:any) {
        module.url = this.imageUrl;
    }

    deleteImageUrl(module:any) {
        module.url = 'images/img-default.png';
    }

}
