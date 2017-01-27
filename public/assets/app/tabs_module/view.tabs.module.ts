import { Component, Input } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridBlock} from '../gridBlock_component/gridBlock.component';
import {tabsItem} from './tabsItem';
import {bgColorModule} from '../bgColor_component/bgColor.module';
declare var $: any;

@Component({
    selector: 'view-tabs-module',
    templateUrl: 'assets/app/tabs_module/view.tabs.module.html',
    styleUrls: ['assets/app/tabs_module/tabs.module.css'],
    inputs: ['gE','module']
})

export class ViewTabsModule {}
