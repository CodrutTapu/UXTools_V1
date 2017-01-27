import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
    selector: 'app-signup',
    templateUrl: './assets/app/signup/signup.component.html',
    styleUrls: ['./assets/app/signup/signup.component.css'],
    providers: [UserService],
})
export class SignupComponent implements OnInit {

    currentUser:any;

    constructor(
        private router: Router,
        private userService: UserService,
    ) { }

    ngOnInit() {
    }

    register(event:any, full_name:any, email:any, password:any) {
        event.preventDefault();
        this.userService.create(full_name, email, password)
            .subscribe(
                (data:any) => this.currentUser = data,
                (error:any) => alert(error),
                () => console.log("Finished")
            );
    }

}
