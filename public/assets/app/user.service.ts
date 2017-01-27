import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { URLSearchParams, QueryEncoder } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    constructor(
        private http: Http
    ) { }
    
    create(full_name:any, email:any, password:any) {
        let body = new URLSearchParams();
        body.set('full_name', full_name);
        body.set('email', email);
        body.set('password', password);
        return this.http.post('/auth/signup', body)
            .map((response: Response)  =>response.json());
    }

    authenticate(email:any, password:any) {
        let body = new URLSearchParams();
        body.set('email', email);
        body.set('password', password);
        return this.http.post('/auth/signin', body)
            .map((response: Response)  =>response.json());
    }

    getProjects(author_id:any) {
        return this.http.get('/dashboard/getProjects/' + author_id)
            .map(res => res.json());
    }

    getCurrentUser() {
        return this.http.get('/getCurrentUser')
            .map(res => res.json());
    }

    getProject(author_id:any, project_id:any) {
        return this.http.get('/projects/getProject/' + author_id + '/' + project_id)
            .map(res => res.json());
    }

}
