import { Component } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridBlock} from '../gridBlock_component/gridBlock.component';
declare var $: any;

@Component({
    selector: 'view-text-module',
    templateUrl: 'assets/app/text_module/view.text.module.html',
    styleUrls:  ['assets/app/text_module/text.module.css'],
    inputs: ['gE','module']
})

export class ViewTextModule {}
