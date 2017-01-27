import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { textModule } from '../text_module/textModule';
import { imageModule } from '../image_module/imageModule';
import { barGraphModule } from '../bar_graph_module/barGraphModule';
import { barGraphBar } from '../bar_graph_module/barGraphBar';
import { socialMediaModule } from '../social_media_module/socialMediaModule';
import { tagModule } from '../tag_module/tagModule';
import { tagModuleTag } from '../tag_module/tagModuleTag';
import { emailModule } from '../email_module/emailModule';
import { scaleChartModule } from '../scale_chart_module/scaleChartModule';
import { scaleChartModuleScale } from '../scale_chart_module/scaleChartModuleScale';
import { pieChartModule } from '../pie_chart_module/pieChartModule';
import { accordionModule } from '../accordion_module/accordionModule';
import { accordionItem } from '../accordion_module/accordionItem';
import { tabsModule } from '../tabs_module/tabsModule';
import { tabsItem } from '../tabs_module/tabsItem';
import { embedModule } from '../embed_module/embedModule';
import { devicesPlatformsModule } from '../devicesPlatforms_module/devicesPlatformsModule';
import { devicePlatform } from '../devicesPlatforms_module/devicePlatform';
import { aboutModule } from '../about_module/aboutModule';
import { aboutItem } from '../about_module/aboutItem';
import { countingModule } from '../counting_module/countingModule';
declare var toastr:any;

@Injectable()
export class cloneModuleService {
    cloneModule(gE:any,module:any) {
        var i;
        switch(module.id) {
            case 1:
                gE.modules.push(new textModule(1,'text-module',module.content,module.bgColor));
                break;
            case 2:
                gE.modules.push(new imageModule(2,'image-module',module.url));
                break;
            case 3:
                var new_bars = [];
                for (i = 0; i < module.bars.length; i++) {
                    new_bars[i] = new barGraphBar(module.bars[i].value,module.bars[i].label);
                }
                gE.modules.push(new barGraphModule(3,'bar-graph-module',module.title,new_bars,module.bgColor));
                break;
            case 4:
                gE.modules.push(new socialMediaModule(4,'social-media-module',module.facebookUrl,module.twitterUrl,module.linkedinUrl,module.externalUrl,'#F8F8F8'));
                break;
            case 5:
                var new_tags = [];
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
                for (i = 0; i < module.tags.length; i++) {
                    new_tags[i] = new tagModuleTag(maxId+i+1,module.tags[i].name,module.tags[i].color);
                }
                gE.modules.push(new tagModule(5,'tags-module',new_tags,module.bgColor));
                break;
            case 6:
                gE.modules.push(new emailModule(6,'email-module',module.email,module.content,module.bgColor));
                break;
            case 7:
                var new_scales = [];
                var i;
                for (i = 0; i < module.scales.length; i++) {
                    new_scales[i] = new scaleChartModuleScale(module.scales[i].sideA,module.scales[i].sideB,module.scales[i].value);
                }
                gE.modules.push(new scaleChartModule(7,'scale-chart-module',module.title,new_scales,module.bgColor));
                break;
            case 8:
                var i,j;
                var maxId = 0;
                for(i=0;i<gE.modules.length;i++) {
                    if(gE.modules[i].id == 8) {
                        if(gE.modules[i].pieId > maxId) {
                            maxId = gE.modules[i].pieId;
                        }
                    }
                }
                var new_labels = [];
                var new_data = [];
                for (i = 0; i < module.labels.length; i++) {
                    new_labels[i] = module.labels[i];
                    new_data[i] = module.data[i];
                }
                gE.modules.push(new pieChartModule(8,maxId+1,'pie-chart-module',module.title,new_labels,new_data,module.bgColor));
                break;
            case 9:
                var i,j;
                var maxId = 0;
                var new_items = [];
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
                for (i = 0; i < module.items.length; i++) {
                    maxId = maxId + 1;
                    new_items[i] = new accordionItem('item' + maxId,module.items[i].title,module.items[i].content);
                }
                gE.modules.push(new accordionModule(9,'accordion-module',module.title,new_items,module.bgColor));
                break;
            case 10:
                var i,j;
                var maxId = 0;
                var new_items = [];
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
                for (i = 0; i < module.items.length; i++) {
                    maxId = maxId + 1;
                    new_items[i] = new tabsItem('item' + maxId,'Tab','<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien 1.</p>')
                }
                gE.modules.push(new tabsModule(10,'tabs-module',new_items,module.bgColor));
                break;
            case 11:
                gE.modules.push(new embedModule(11,'embed-module',module.title,module.content));
                break;
            case 12:
                var new_options = [];
                var i;
                var maxId = 0;
                for(i=0;i<gE.modules.length;i++) {
                    if(gE.modules[i].id == 12) {
                        if(gE.modules[i].moduleId > maxId) {
                            maxId = gE.modules[i].moduleId;
                        }
                    }
                }
                for (i = 0; i < module.options.length; i++) {
                    new_options[i] = new devicePlatform(module.options[i].content,module.options[i].status,module.options[i].name);
                }
                gE.modules.push(new devicesPlatformsModule(12,maxId+1,'devices-platforms-module',new_options,module.bgColor));
                break;
            case 13:
                var new_content = [];
                for (i = 0; i < module.content.length; i++) {
                    new_content[i]= new aboutItem(module.content[i].name,module.content[i].value);
                }
                gE.modules.push(new aboutModule(13,'about-module',new_content,module.bgColor));
                break;
            case 14:
                gE.modules.push(new countingModule(14,'counting-module',[module.content[0],module.content[1]],module.bgColor));
                break;
            default:
                console.log("Err");
        }
    }

}
