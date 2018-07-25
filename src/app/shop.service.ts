import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Shop} from "./shop";

@Injectable({
    providedIn: 'root'
})
export class ShopService {

    private url = 'http://localhost:8000/shops';
    mockLocation = {
        lat: 33.6874143,
        long: -7.4064472
    };

    constructor(private http: HttpClient) { }

    getAll(): Observable<Shop[]> {

        const url = this.url + '?location=' + this.mockLocation.lat + ',' + this.mockLocation.long;
        return this.http.get<Shop[]>(url);
    }

    getPreferred(): Observable<Shop[]> {

        const url = this.url + '?liked=true';
        return this.http.get<Shop[]>(url);
    }


}
