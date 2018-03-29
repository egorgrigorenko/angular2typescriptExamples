import {ActivatedRoute} from "@angular/router";
import {Component} from "@angular/core";

@Component({
    selector: 'product',
    styles: ['.product {background: cyan}'],
    template: `
        <div class="product">
            <h1>Product Detail for Product {{productId}}</h1>
            <router-outlet></router-outlet>
            <p><a [routerLink]="['./seller', 5678]">Seller Info</a></p>
        </div>
    `
})
export class ProductDetailChildComponent {
    productId: string;

    constructor(route: ActivatedRoute) {
        this.productId = route.snapshot.params['id'];
    }
}