import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock_component/gridBlock.component';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { bgColorModule } from '../bgColor_component/bgColor.module';
declare var $: any;

@Component({
    selector: 'view-embed-module',
    templateUrl: 'assets/app/embed_module/view.embed.module.html',
    styleUrls: ['assets/app/embed_module/embed.module.css'],
    inputs: ['gE','module']
})

export class ViewEmbedModule {
    module:any;
    embedUrl:any;
    url: SafeResourceUrl;

    constructor(private sanitizer:DomSanitizer ){}

    ngOnInit(){
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.module.content);
    }

}
