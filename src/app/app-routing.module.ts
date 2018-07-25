import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NearbyShopsComponent} from "./nearby-shops/nearby-shops.component";
import {PreferredShopsComponent} from "./preferred-shops/preferred-shops.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
    { path: '', redirectTo: '/nearby-shops', pathMatch: 'full'},
    { path: 'nearby-shops', component: NearbyShopsComponent},
    { path: 'preferred-shops', component: PreferredShopsComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
