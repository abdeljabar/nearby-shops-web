import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs/index";
import {catchError, tap} from "rxjs/internal/operators";
import {AlertService} from "./alert.service";
import {User} from "./user";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private url = 'http://localhost:8000';

    constructor(private http: HttpClient, private alertService: AlertService) { }

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
        // console.log(fd);

        const url = this.url + '/register';
        return this.http.post(url, fd, {observe: 'response'})
            .pipe(
                tap(_ => this.log('New user creaed successfully.', 'success')),
                catchError(this.handleError<User>('Registration'))
            );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.error(error); // log to console instead

            this.log(operation + ' failed: ' + error.error.message, 'error');

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };

    }

    log(message: string, status: string) {
        if (status === 'error') {
            this.alertService.error(message);
        } else {
            this.alertService.info(message);
        }

    }
}
