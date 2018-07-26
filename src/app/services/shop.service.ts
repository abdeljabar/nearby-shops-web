import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs/index";
import {Shop} from "../models/shop";
import {AlertService} from "./alert.service";
import {catchError, tap} from "rxjs/internal/operators";

@Injectable({
    providedIn: 'root'
})
export class ShopService {

    private url = 'http://localhost:8000';
    mockLocation = {
        lat: 33.6874143,
        long: -7.4064472
    };

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient, private alertService: AlertService) { }

    getAll(): Observable<Shop[]> {
        const url = this.url + '/shops?location=' + this.mockLocation.lat + ',' + this.mockLocation.long;
        return this.http.get<Shop[]>(url);
    }

    getPreferred(): Observable<Shop[]> {

        const url = this.url + '/shops?liked=true';
        return this.http.get<Shop[]>(url);
    }

    like(shop: Shop): Observable<any> {
        const url = this.url + shop.like_action_uri;
        console.log(url);
        return this.http.post(url, '', this.httpOptions)
            .pipe(
                tap(_ => this.log('Shop ' + shop.name + ' liked', 'success')),
                    catchError(this.handleError<Shop>('Like'))
            );
    }

    unlike(shop: Shop): Observable<any> {
        const url = this.url + shop.unlike_action_uri;
        console.log(url);
        return this.http.post(url, '', this.httpOptions).pipe(
            tap(_ => this.log('Shop ' + shop.name + ' removed from preferred list', 'success')),
            catchError(this.handleError<Shop>('Unlike'))
        );
    }

    dislike(shop: Shop): Observable<any> {
        const url = this.url + shop.dislike_action_uri;
        console.log(url);
        return this.http.post(url, '', this.httpOptions).pipe(
            tap(_ => this.log('Shop ' + shop.name + ' disliked', 'success')),
            catchError(this.handleError<Shop>('Dislike'))
        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.error(error); // log to console instead

            this.log(operation + ' failed.', 'error');

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };

    }

    log(message: string, status: string) {
        if (status === 'error') {
            this.alertService.error(message);
        } else {
            this.alertService.success(message);
        }

    }


}
