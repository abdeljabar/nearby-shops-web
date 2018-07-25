import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private url = 'http://localhost:8000';

    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<any> {
        // const credentials = {email: email, password: password};
        const fd = new FormData();
        fd.append('email', email);
        fd.append('password', password);
        console.log(fd);

        const url = this.url + '/login_check';
        return this.http.post(url, fd);
    }

    register(email: string, password: string) {
        const fd = new FormData();
        fd.append('email', email);
        fd.append('password', password);
        console.log(fd);

        const url = this.url + '/register';
        return this.http.post(url, fd);
    }
}
