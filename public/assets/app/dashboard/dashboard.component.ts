import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { UserService } from '../user.service';
declare var $:any;
declare var toastr:any;

@Component({
    selector: 'dashboard-component',
    templateUrl: './assets/app/dashboard/dashboard.component.html',
    styleUrls: ['./assets/app/dashboard/dashboard.component.css']
})

export class DashboardComponent {

    projects:Array<any> = [];
    user:any;
    author_id:number = 41;
    viewArchivedProjects:boolean = false;

    constructor(private UserService: UserService) {}

    ngOnInit() {
        this.getUser();
    }

    UserServiceGetProjects() {
        this.UserService.getProjects(this.user.id)
            .subscribe(
                data => this.projects = data,
                error => alert(Error),
                    () => console.log("Finish!")
            );
    }

    changeViewArchivedProjects() {
        this.viewArchivedProjects = !this.viewArchivedProjects;
        if (this.viewArchivedProjects === true) {
            $('.view-archived-btn').html('<i class="fa fa-file-archive-o" aria-hidden="true"></i> Unarchived Projects');
        } else {
            $('.view-archived-btn').html('<i class="fa fa-file-archive-o" aria-hidden="true"></i> Archived Projects');
        }
    }

    getUser() {
        this.UserService.getCurrentUser()
            .subscribe(
                data => this.user = data,
                error => alert(Error),
                    () => this.UserServiceGetProjects()
            );
    }

    deleteProject(author_id:any, project_id:any) {
        var ajaxurl = '/projects/deleteProject',
        data =  {'author_id': author_id, 'project_id': project_id};
        $.post(ajaxurl, data, function (response:any) {});
        this.UserServiceGetProjects();
        toastr["error"](" ", "Project Deleted!");
    }

    archiveProject(author_id:any, project_id:any, project_archived:any) {
        var ajaxurl = '/projects/archiveProject',
        data =  {'author_id': author_id, 'project_id': project_id};
        $.post(ajaxurl, data, function (response:any) {});
        this.UserServiceGetProjects();
        if( project_archived == 1 ) {
            toastr["warning"](" ", "Project Unarchived!");
        } else {
            toastr["warning"](" ", "Project Archived!");
        }
    }

}
