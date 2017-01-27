import { Component, EventEmitter, Output } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';
import { TextModule } from '../text_module/text.module';
import { textModule } from '../text_module/textModule';
import { ViewTextModule } from '../text_module/view.text.module'
import { ImageModule } from '../image_module/image.module';
import { imageModule } from '../image_module/imageModule';
import { ViewImageModule } from '../image_module/view.image.module';
import { BarGraphModule } from '../bar_graph_module/bar-graph.module';
import { barGraphModule } from '../bar_graph_module/barGraphModule';
import { barGraphBar } from '../bar_graph_module/barGraphBar';
import { ViewBarGraphModule } from '../bar_graph_module/view.bar-graph.module';
import { SocialMediaModule } from '../social_media_module/social-media.module';
import { socialMediaModule } from '../social_media_module/socialMediaModule';
import { ViewSocialMediaModule } from '../social_media_module/view.social-media.module'
import { TagModule } from '../tag_module/tag.module';
import { tagModule } from '../tag_module/tagModule';
import { tagModuleTag } from '../tag_module/tagModuleTag';
import { ViewTagModule } from '../tag_module/view.tag.module';
import { EmailModule } from '../email_module/email.module';
import { emailModule } from '../email_module/emailModule';
import { ViewEmailModule } from '../email_module/view.email.module';
import { ScaleChartModule } from '../scale_chart_module/scale-chart.module';
import { scaleChartModule } from '../scale_chart_module/scaleChartModule';
import { scaleChartModuleScale } from '../scale_chart_module/scaleChartModuleScale';
import { ViewScaleChartModule } from '../scale_chart_module/view.scale-chart.module';
import { PieChartModule } from '../pie_chart_module/pie-chart.module';
import { pieChartModule } from '../pie_chart_module/pieChartModule';
import { ViewPieChartModule } from '../pie_chart_module/view.pie-chart.module';
import { AccordionModule } from '../accordion_module/accordion.module';
import { accordionModule } from '../accordion_module/accordionModule';
import { accordionItem } from '../accordion_module/accordionItem';
import { ViewAccordionModule } from '../accordion_module/view.accordion.module';
import { TabsModule } from '../tabs_module/tabs.module';
import { tabsModule } from '../tabs_module/tabsModule';
import { tabsItem } from '../tabs_module/tabsItem';
import { ViewTabsModule } from '../tabs_module/view.tabs.module';
import { EmbedModule } from '../embed_module/embed.module';
import { embedModule } from '../embed_module/embedModule';
import { ViewEmbedModule } from '../embed_module/view.embed.module';
import { DevicesPlatformsModule } from '../devicesPlatforms_module/devices-platforms.module';
import { devicesPlatformsModule } from '../devicesPlatforms_module/devicesPlatformsModule';
import { devicePlatform } from '../devicesPlatforms_module/devicePlatform';
import { ViewDevicesPlatformsModule } from '../devicesPlatforms_module/view.devices-platforms.module';
import { AboutModule } from '../about_module/about.module';
import { aboutModule } from '../about_module/aboutModule';
import { aboutItem } from '../about_module/aboutItem';
import { ViewAboutModule } from '../about_module/view.about.module';
import { CountingModule } from '../counting_module/counting.module';
import { countingModule } from '../counting_module/countingModule';
import { ViewCountingModule } from '../counting_module/view.counting.module';
import { colorSchemeModule } from '../colorScheme_component/colorScheme.module';
declare var $: any;

@Component({
    selector: 'grid-block',
    templateUrl: 'assets/app/gridBlock_component/grid-block.html',
    styleUrls: ['assets/app/gridBlock_component/grid-block.css'],
    inputs: ['gridElements','currentUser']
})

export class GridBlock {
    gridElements:Array<number> = [];

    gE_modules_options: SortablejsOptions = {
        group: 'gE_modules',
        handle: '.move',
        animation: 150
    };

    minGridElem(gE:any) {
        if(gE.dim == 2){
            alert("Too Small");
            gE.dim = 2;
        } else {
            gE.dim-=2;
        }
    }

    maxGridElem(gE:any) {
        if(gE.dim == 12){
            alert("Too Large");
            gE.dim = 12;
        } else {
            gE.dim+=2;
        }
    }

    clearGridElement(gE:any) {
        gE.modules = [];
    }

    deleteGridElem(gE:any) {
        this.gridElements.splice(this.gridElements.indexOf(gE), 1);
    }

    addTextModule(gE:any) {
        gE.modules.push(new textModule(1,'text-module','<h1>New Text Field</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>','#F8F8F8'));
        $('.add-module-modal').modal('hide');
    }

    addImageModule(gE:any) {
        gE.modules.push(new imageModule(2,'image-module','images/img-default.png'));
        $('.add-module-modal').modal('hide');
    }

    addBarGraphModule(gE:any) {
        gE.modules.push(new barGraphModule(3,'bar-graph-module','<h1>Bar Graph</h1>',[new barGraphBar(30,'<p>Label 1</p>'),new barGraphBar(50,'<p>Label 2</p>'),new barGraphBar(100,'<p>Label 3</p>')],'#F8F8F8'));
        $('.add-module-modal').modal('hide');
    }

    addSocialMediaModule(gE:any) {
        gE.modules.push(new socialMediaModule(4,'social-media-module','facebook','twitter','linkedin','external','#F8F8F8'));
        $('.add-module-modal').modal('hide');
    }

    addTagModule(gE:any) {
        var i,j;
        var maxId = 0;
        for(i=0;i<gE.modules.length;i++) {
            if(gE.modules[i].id == 5) {
                for(j=0;j<gE.modules[i].tags.length;j++) {
                    if(gE.modules[i].tags[j].id > maxId) {
                        maxId = gE.modules[i].tags[j].id;
                    }
                }
            }
        }
        gE.modules.push(new tagModule(5,'tags-module',[new tagModuleTag(maxId+1,'<p>Tag 1</p>','#e3e5e6'),new tagModuleTag(maxId+2,'<p>Tag 2</p>','#e3e5e6'),new tagModuleTag(maxId+3,'<p>Tag 3</p>','#e3e5e6')],'#F8F8F8'));
        $('.add-module-modal').modal('hide');
    }

    addEmailModule(gE:any) {
        gE.modules.push(new emailModule(6,'email-module','you@yourmail.com','<h2>This is a form field to collect emails.</h2><p>Give them a good reason.</p>','#F8F8F8'));
        $('.add-module-modal').modal('hide');
    }

    addScaleChartModule(gE:any) {
        gE.modules.push(new scaleChartModule(7,'scale-chart-module','<h1>Scale Chart</h1>',[new scaleChartModuleScale('<p>Side A</p>','<p>Side B</p>',0),new scaleChartModuleScale('<p>Side A</p>','<p>Side B</p>',50),new scaleChartModuleScale('<p>Side A</p>','<p>Side B</p>',100)],'#F8F8F8'));
        $('.add-module-modal').modal('hide');
    }

    addPieChartModule(gE:any) {
        var i,j;
        var maxId = 0;
        for(i=0;i<gE.modules.length;i++) {
            if(gE.modules[i].id == 8) {
                if(gE.modules[i].pieId > maxId) {
                    maxId = gE.modules[i].pieId;
                }
            }
        }
        gE.modules.push(new pieChartModule(8,maxId+1,'pie-chart-module','<h1>Pie Chart</h1>',["Red", "Blue", "Yellow"],[12, 19, 3],'#F8F8F8'));
        $('.add-module-modal').modal('hide');
    }

    addAccordionModule(gE:any) {
        var i,j;
        var maxId = 0;
        for(i=0;i<gE.modules.length;i++) {
            if(gE.modules[i].id == 9) {
                for(j=0;j<gE.modules[i].items.length;j++) {
                    if(gE.modules[i].items[j].id.length == 5) {
                        if(parseInt(gE.modules[i].items[j].id[4]) > maxId) {
                            maxId = parseInt(gE.modules[i].items[j].id[4]);
                        }
                    } else if(gE.modules[i].items[j].id.length  == 6){
                        if(parseInt(gE.modules[i].items[j].id[4] + gE.modules[i].items[j].id[5]) > maxId) {
                            maxId = parseInt(gE.modules[i].items[j].id[4] + gE.modules[i].items[j].id[5]);
                        }
                    }
                }
            }
        }
        var maxId1 = maxId + 1;
        var maxId2 = maxId + 2;
        var maxId3 = maxId + 3;
        gE.modules.push(new accordionModule(9,'accordion-module','<h1>Accordion</h1>',[new accordionItem('item' + maxId1,'Item 1','<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>'), new accordionItem('item' + maxId2,'Item 2','<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>'), new accordionItem('item' + maxId3,'Item 3','<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>')],'#F8F8F8'));
        $('.add-module-modal').modal('hide');
    }

    addTabsModule(gE:any) {
        var i,j;
        var maxId = 0;
        for(i=0;i<gE.modules.length;i++) {
            if(gE.modules[i].id == 10) {
                for(j=0;j<gE.modules[i].items.length;j++) {
                    if(gE.modules[i].items[j].id.length == 5) {
                        if(parseInt(gE.modules[i].items[j].id[4]) > maxId) {
                            maxId = parseInt(gE.modules[i].items[j].id[4]);
                        }
                    } else if(gE.modules[i].items[j].id.length  == 6){
                        if(parseInt(gE.modules[i].items[j].id[4] + gE.modules[i].items[j].id[5]) > maxId) {
                            maxId = parseInt(gE.modules[i].items[j].id[4] + gE.modules[i].items[j].id[5]);
                        }
                    }
                }
            }
        }
        var maxId1 = maxId + 1;
        var maxId2 = maxId + 2;
        var maxId3 = maxId + 3;
        gE.modules.push(new tabsModule(10,'tabs-module',[new tabsItem('item' + maxId1,'Tab 1','<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien 1.</p>'),new tabsItem('item' + maxId2,'Tab 2','<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien 2.</p>'),new tabsItem('item' + maxId3,'Tab 3','<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien 3.</p>')],'#F8F8F8'));
        $('.add-module-modal').modal('hide');
    }

    addEmbedModule(gE:any) {
        gE.modules.push(new embedModule(11,'embed-module','<h1>Embed</h1>','https://www.youtube.com/embed/rn5s6H_Yamo'));
        $('.add-module-modal').modal('hide');
    }

    addDevicesPlatformsModule(gE:any) {
        var i;
        var maxId = 0;
        for(i=0;i<gE.modules.length;i++) {
            if(gE.modules[i].id == 12) {
                if(gE.modules[i].moduleId > maxId) {
                    maxId = gE.modules[i].moduleId;
                }
            }
        }
        gE.modules.push(new devicesPlatformsModule(12,maxId+1,'devices-platforms-module',[new devicePlatform('<i class="fa fa-mobile" aria-hidden="true"></i>',true,'Mobile'),
                                                                                    new devicePlatform('<i class="fa fa-tablet" aria-hidden="true"></i>',true,'Tablet'),
                                                                                    new devicePlatform('<i class="fa fa-laptop" aria-hidden="true"></i>',true,'Laptop'),
                                                                                    new devicePlatform('<i class="fa fa-desktop" aria-hidden="true"></i>',false,'Desktop'),
                                                                                    new devicePlatform('<i class="fa fa-television" aria-hidden="true"></i>',false,'TV'),
                                                                                    new devicePlatform('<i class="fa fa-windows" aria-hidden="true"></i>',false,'Windows'),
                                                                                    new devicePlatform('<i class="fa fa-apple" aria-hidden="true"></i>',false,'Apple'),
                                                                                    new devicePlatform('<i class="fa fa-linux" aria-hidden="true"></i>',false,'Linux'),
                                                                                    new devicePlatform('<i class="fa fa-chrome" aria-hidden="true"></i>',false,'Chrome'),
                                                                                    new devicePlatform('<i class="fa fa-firefox" aria-hidden="true"></i>',false,'Firefox'),
                                                                                    new devicePlatform('<i class="fa fa-internet-explorer" aria-hidden="true"></i>',false,'IE'),
                                                                                    new devicePlatform('<i class="fa fa-safari" aria-hidden="true"></i>',false,'Safari')],'#F8F8F8'));
        $('.add-module-modal').modal('hide');
    }

    addAboutModule(gE:any) {
        gE.modules.push(new aboutModule(13,'about-module',[new aboutItem('<p>age</p>','<p>1-100</p>'),
                                                            new aboutItem('<p>occupation</p>','<p>What they do</p>'),
                                                            new aboutItem('<p>status</p>','<p>Single, Marries, Etc</p>'),
                                                            new aboutItem('<p>location</p>','<p>Where they live/work</p>'),
                                                            new aboutItem('<p>tier</p>','<p>Frequency of use</p>'),
                                                            new aboutItem('<p>archetype</p>','<p>Character model</p>'),
                                                        ],'#F8F8F8'));
        $('.add-module-modal').modal('hide');
    }

    addSimpleCountingModule(gE:any) {
        gE.modules.push(new countingModule(14,'counting-module',['<p class="counting-value"><span class="number">00</span></p>','<p class="counting-description">Something you want to count</p>'],'#F8F8F8'));
        $('.add-module-modal').modal('hide');
    }

    addSufixedCountingModule(gE:any) {
        gE.modules.push(new countingModule(14,'counting-module',['<p class="counting-value"><span class="number">00</span><span class="counting-sufix"> min</span></p>','<p class="counting-description">Something you want to count</p>'],'#F8F8F8'));
        $('.add-module-modal').modal('hide');
    }

    addIntervalCountingModule(gE:any) {
        gE.modules.push(new countingModule(14,'counting-module',['<p class="counting-value"><span class="number">00-00</span></p>','<p class="counting-description">Something you want to count</p>'],'#F8F8F8'));
        $('.add-module-modal').modal('hide');
    }

    addPrefixedCountingModule(gE:any) {
        gE.modules.push(new countingModule(14,'counting-module',['<p class="counting-value"><span class="counting-prefix">$ <span><span class="number">00</span></p>','<p class="counting-description">Something you want to count</p>'],'#F8F8F8'));
        $('.add-module-modal').modal('hide');
    }

}
