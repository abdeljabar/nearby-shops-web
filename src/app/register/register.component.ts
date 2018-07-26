import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {AlertService} from "../alert.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor(private router: Router, private userService: UserService, private alertService: AlertService) { }

    ngOnInit() {
    }

    register(email: string, password: string): void {
        this.userService.register(email, password).subscribe(
            response => {
                if (response.status && response.status=== 201) {
                    this.router.navigate(['/login']);
                }
            }
        );
    }

}
