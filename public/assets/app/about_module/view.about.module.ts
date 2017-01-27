import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { aboutItem } from './aboutItem';
import { bgColorModule } from '../bgColor_component/bgColor.module';
declare var $: any;

@Component({
    selector: 'view-about-module',
    templateUrl: 'assets/app/about_module/view.about.module.html',
    styleUrls: ['assets/app/about_module/about.module.css'],
    inputs: ['gE','module']
})

export class ViewAboutModule {}
