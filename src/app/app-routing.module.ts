import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NearbyShopsComponent} from "./nearby-shops/nearby-shops.component";

const routes: Routes = [
    { path: '', redirectTo: '/nearby-shops', pathMatch: 'full'},
    { path: 'nearby-shops', component: NearbyShopsComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
