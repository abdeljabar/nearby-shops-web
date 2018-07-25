import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {TokenStorage} from "../../token.storage";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private tokenStorage: TokenStorage) { }

  ngOnInit() {
  }

  login(email: string, password: string): void {
    this.userService.login(email, password).subscribe(
        data => {
          console.log(data);
          // this.token.saveToken(data.token);
          if (data.token) {
              console.log('successful login: ' + data.token);
              this.tokenStorage.saveToken(data.token);
              this.router.navigate(['/nearby-shops']);
          } else {
              console.log('unsuccessful login.');
          }
        }
    );
  }

}
