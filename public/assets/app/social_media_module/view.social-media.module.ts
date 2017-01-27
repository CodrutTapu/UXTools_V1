import { Component } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridBlock} from '../gridBlock_component/gridBlock.component';
import {bgColorModule} from '../bgColor_component/bgColor.module';

@Component({
    selector: 'view-social-media-module',
    templateUrl: 'assets/app/social_media_module/view.social-media.module.html',
    styleUrls: ['assets/app/social_media_module/social-media.module.css'],
    inputs: ['gE','module']
})

export class ViewSocialMediaModule {
    facebookUrl:any;
    twitterUrl:any;
    linkedinUrl:any;
    externalUrl:any;
}
