import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './assets/app/signin/signin.component.html',
  styleUrls: ['./assets/app/signin/signin.component.css']
})
export class SigninComponent implements OnInit {

    currentUser:any;

  constructor(
        private router: Router,
        private userService: UserService,
     ) { }

  ngOnInit() {
  }

  register(event:any, email:any, password:any) {
        event.preventDefault();
        this.userService.authenticate(email, password)
            .subscribe(
                (data:any) => this.currentUser = data,
                (error:any) => alert(error),
                () => console.log("Finished")
            );
    }

}
