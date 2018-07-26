import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { NearbyShopsComponent } from './nearby-shops/nearby-shops.component';
import { AppRoutingModule } from './/app-routing.module';
import { PreferredShopsComponent } from './preferred-shops/preferred-shops.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {TokenInterceptor} from "./token.interceptor";
import {TokenStorage} from "../token.storage";
import {AlertService} from "./alert.service";
import {AlertComponent} from "./alert/alert.component";

@NgModule({
    declarations: [
        AppComponent,
        NearbyShopsComponent,
        PreferredShopsComponent,
        RegisterComponent,
        LoginComponent,
        AlertComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }, TokenStorage, AlertService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
