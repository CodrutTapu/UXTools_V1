import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { GridBlock } from '../gridBlock_component/gridBlock.component';
import { gridElem } from '../models/gridElem';
import { user } from '../models/user';
import { persona } from '../models/persona';
import { textModule } from '../text_module/textModule';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
declare var $:any;
declare var toastr:any;

@Component({
    selector: 'new-persona',
    templateUrl: 'assets/app/newPersona_component/persona.component.html',
})

export class newPersonaComponent {

    project_name:any = "Default";

    getData:Array<any> = [];
    gridElements:Array<gridElem> = [new gridElem(4,1,[new textModule(1,'text-module','<h1>Text Field 1</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>','#F8F8F8')],'#4c7ba0'),
                                    new gridElem(4,2,[new textModule(1,'text-module','<h1>Text Field 2</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>','#F8F8F8')],'#4c7ba0'),
                                    new gridElem(4,3,[new textModule(1,'text-module','<h1>Text Field 3</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>','#F8F8F8')],'#4c7ba0')];

    user:any;
    id:number = 3;

    constructor(private UserService: UserService) {}

    ngOnInit() {
        this.getUser();
    }

    getUser() {
        this.UserService.getCurrentUser()
            .subscribe(
                data => this.user = data,
                error => alert(Error),
                    () => console.log('Finish!')
            );
    }

    addGridElement(dim:number) {
        this.gridElements.push(new gridElem(dim,this.id+1,[],'#4c7ba0'));
        this.id = this.id+1;
    }

    savePersona() {
        var ajaxurl = '/projects/saveNewPersona',
        data =  {'author_id': this.user.id, 'project_name': this.project_name, 'persona_content': JSON.stringify(this.gridElements)};
        $.post(ajaxurl, data, function (response:any) {});
        toastr["success"](" ", "Persona Saved!");
    }

}
