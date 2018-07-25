import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { NearbyShopsComponent } from './nearby-shops/nearby-shops.component';
import { AppRoutingModule } from './/app-routing.module';
import { PreferredShopsComponent } from './preferred-shops/preferred-shops.component';

@NgModule({
    declarations: [
        AppComponent,
        NearbyShopsComponent,
        PreferredShopsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
