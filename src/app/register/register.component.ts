import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor(private router: Router, private userService: UserService) { }

    ngOnInit() {
    }

    register(email: string, password: string): void {
        this.userService.register(email, password).subscribe(
            data => {
                console.log(data);
                // this.token.saveToken(data.token);
                if (data['success']) {
                    console.log('successful registration.');
                    this.router.navigate(['/login']);
                } else {
                    console.log('unsuccessful registration.');
                }
            }
        );
    }

}
