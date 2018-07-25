import { Component, OnInit } from '@angular/core';
import {Shop} from "../shop";
import {ShopService} from "../shop.service";

@Component({
    selector: 'app-preferred-shops',
    templateUrl: './preferred-shops.component.html',
    styleUrls: ['./preferred-shops.component.scss']
})
export class PreferredShopsComponent implements OnInit {

    shops: Shop[];

    constructor(private shopService: ShopService) { }

    ngOnInit() {
        this.getPreferredShops();
    }

    getPreferredShops(): void {
        this.shopService.getPreferred()
            .subscribe(shops => {
                this.shops = shops['result'];
                console.log(this.shops);
            });
    }

    unlike(shop: Shop): void {
        console.log(shop);

        this.shopService.unlike(shop).subscribe();
        this.shops = this.shops.filter(s => s !== shop);
    }

}
