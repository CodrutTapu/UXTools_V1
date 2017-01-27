import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { UserService } from './user.service';

@Component({
    selector: 'ux-tools',
    templateUrl: './assets/app/app.component.html',
    providers: [UserService],
})

export class AppComponent  {}
