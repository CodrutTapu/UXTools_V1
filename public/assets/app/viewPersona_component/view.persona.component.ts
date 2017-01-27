import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { GridBlock } from '../gridBlock_component/gridBlock.component';
import { gridElem } from '../models/gridElem';
import { user } from '../models/user';
import { persona } from '../models/persona';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
declare var $:any;

@Component({
    selector: 'view-persona',
    templateUrl: 'assets/app/viewPersona_component/view.persona.component.html',
})

export class ViewPersonaComponent {
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

    httpGet() {
        this.UserService.getProject(this.author_id, this.project_id)
            .subscribe(
                data => this.getData = data,
                error => alert(Error),
                    () => this.gridElements = JSON.parse(this.getData[0].content)
            );
    }
}
