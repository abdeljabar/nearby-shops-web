import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs/index";
import {NavigationStart, Router} from "@angular/router";
import {AlertType} from "./alert.type";
import {Alert} from "./alert";

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    private subject = new Subject<Alert>();
    private keepAfterRouteChange = true;

    constructor(private router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.keepAfterRouteChange = false;
            } else {
                this.clear();
            }
        });
    }

    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    success(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Success, message, keepAfterRouteChange);
    }

    error(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    }

    info(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    }

    warn(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    }

    alert(type: AlertType, message: string, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next(<Alert> { type: type, message: message});
    }

    clear() {
        this.subject.next();
    }
}
