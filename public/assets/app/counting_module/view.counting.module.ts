import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { bgColorModule } from '../bgColor_component/bgColor.module';
declare var $: any;

@Component({
    selector: 'view-counting-module',
    templateUrl: 'assets/app/counting_module/view.counting.module.html',
    styleUrls: ['assets/app/counting_module/counting.module.css'],
    inputs: ['gE','module']
})

export class ViewCountingModule {}
