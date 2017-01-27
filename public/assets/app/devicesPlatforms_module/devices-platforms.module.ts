import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { bgColorModule } from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';
declare var $: any;

@Component({
    selector: 'devices-platforms-module',
    templateUrl: 'assets/app/devicesPlatforms_module/devices-platforms.module.html',
    styleUrls: ['assets/app/devicesPlatforms_module/devices-platforms.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class DevicesPlatformsModule {
    gridElements:Array<number>;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE:any,module:any) {
        this._cloneModuleService.cloneModule(gE,module);
    }

    ngOnInit() {
        setTimeout(function(){
            $('[data-toggle="tooltip"]').tooltip()
        }, 500);
    }

    deleteDevicesPlatformsModule(gE:any,module:any) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    }

    switchDevicePlatformItemStatus(dp:any) {
        dp.status = !dp.status;
        setTimeout(function(){
            $('[data-toggle="tooltip"]').tooltip()
        }, 500);
    }

}
