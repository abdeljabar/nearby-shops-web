import { Component, OnInit } from '@angular/core';
import {ShopService} from "../shop.service";
import {Shop} from "../shop";

@Component({
    selector: 'app-nearby-shops',
    templateUrl: './nearby-shops.component.html',
    styleUrls: ['./nearby-shops.component.scss']
})
export class NearbyShopsComponent implements OnInit {

    shops: Shop[];

    constructor(private shopService: ShopService) { }

    ngOnInit() {
        this.getNearbyShops();
    }

    getNearbyShops(): void {
        this.shopService.getAll()
            .subscribe(shops => {
                this.shops = shops['result'];
                console.log(this.shops);
            });
    }

    like(shop: Shop): void {
        console.log(shop);

        this.shopService.like(shop).subscribe();
        this.shops = this.shops.filter(s => s !== shop);
    }

    dislike(shop: Shop): void {
        console.log(shop);

        this.shopService.dislike(shop).subscribe();
        this.shops = this.shops.filter(s => s !== shop);
    }

}
