import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Shop} from "./shop";

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

    constructor(private http: HttpClient) { }

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
        return this.http.post(url, '', this.httpOptions);
    }

    unlike(shop: Shop): Observable<any> {
        const url = this.url + shop.unlike_action_uri;
        console.log(url);
        return this.http.post(url, '', this.httpOptions);
    }

    dislike(shop: Shop): Observable<any> {
        const url = this.url + shop.dislike_action_uri;
        console.log(url);
        return this.http.post(url, '', this.httpOptions);
    }


}
