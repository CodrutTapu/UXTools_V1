import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { bgColorModule } from '../bgColor_component/bgColor.module';
declare var $: any;

@Component({
    selector: 'view-devices-platforms-module',
    templateUrl: 'assets/app/devicesPlatforms_module/view.devices-platforms.module.html',
    styleUrls: ['assets/app/devicesPlatforms_module/devices-platforms.module.css'],
    inputs: ['gE','module']
})

export class ViewDevicesPlatformsModule {
    ngOnInit() {
        setTimeout(function(){
            $('[data-toggle="tooltip"]').tooltip()
        }, 500);
    }
}
