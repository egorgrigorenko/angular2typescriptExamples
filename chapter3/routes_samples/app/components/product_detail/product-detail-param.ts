import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'product',
    template: `<h1 class="product">Product Detail for product: {{productId}}</h1>`,
    styles: ['.product {background: cyan}']
})
export class ProductDetailParamComponent {
    productId: string;
    isProdEnv: string;

    constructor(private route: ActivatedRoute) {
        this.productId = route.snapshot.params['id'];

        this.isProdEnv = route.snapshot.data[0]['isProd'];
        console.log("this.isProdEnv = " + this.isProdEnv);
    }
}