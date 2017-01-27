import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock_component/gridBlock.component';
import { bgColorModule } from '../bgColor_component/bgColor.module';
declare var $: any;

@Component({
    selector: 'view-email-module',
    templateUrl: 'assets/app/email_module/view-email.module.html',
    styleUrls: ['assets/app/email_module/email.module.css'],
    inputs: ['gE','module']
})

export class ViewEmailModule {}
