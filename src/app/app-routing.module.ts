import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NearbyShopsComponent} from "./nearby-shops/nearby-shops.component";
import {PreferredShopsComponent} from "./preferred-shops/preferred-shops.component";

const routes: Routes = [
    { path: '', redirectTo: '/nearby-shops', pathMatch: 'full'},
    { path: 'nearby-shops', component: NearbyShopsComponent},
    { path: 'preferred-shops', component: PreferredShopsComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
