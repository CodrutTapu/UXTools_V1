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
    selector: 'persona',
    templateUrl: 'assets/app/persona_component/persona.component.html',
})

export class PersonaComponent {

    personaTitle:any;

    getData:Array<any> = [];
    gridElements:Array<gridElem> = [];

    author_id:number;
    project_type:string;
    project_id:number;
    project_name:string;

    constructor(private UserService: UserService, route: ActivatedRoute) {
        this.author_id = route.snapshot.params['author_id'];
        this.project_type = route.snapshot.params['project_type'];
        this.project_id = route.snapshot.params['project_id'];
        this.project_name = route.snapshot.params['project_name'];
    }

    ngOnInit() {
        this.httpGet();
    }

    addGridElement(dim:number) {
        var i;
        var maxId = 0;
        for (i = 0; i < this.gridElements.length; i++) {
            if (this.gridElements[i].id > maxId) {
                maxId = this.gridElements[i].id;
            }
        }
        this.gridElements.push(new gridElem(dim,maxId+1,[],'#4c7ba0'));
    }

    httpGet() {
        this.UserService.getProject(this.author_id, this.project_id)
            .subscribe(
                data => this.getData = data,
                error => alert(Error),
                    () => this.gridElements = JSON.parse(this.getData[0].content)
            );
    }

    savePersona() {
        var ajaxurl = '/projects/savePersona',
        data =  {'author_id': this.author_id, 'project_name': this.project_name, 'project_id': this.project_id, 'persona_content': JSON.stringify(this.gridElements)};
        $.post(ajaxurl, data, function (response:any) {});
        toastr["success"](" ", "Persona Saved!");
    }
}
