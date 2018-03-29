import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ProductDetailComponent} from "./components/product_detail/product-detail.component";
import {ProductDescriptionComponent} from "./components/product_detail/product-description.component";
import {SellerInfoComponent} from "./components/product_detail/seller-info.component";
import {Component, NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {ProductDetailChildComponent} from "./components/product_detail/product-detail-child.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: 'product/:id',
        component: ProductDetailChildComponent,
        children: [
            {path: '', component: ProductDescriptionComponent},
            {path: 'seller/:id', component: SellerInfoComponent}
        ]
    }
];

@Component({
    selector: 'app',
    template:
    `
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/product', 1234]">Product Details</a>
        <router-outlet></router-outlet>
    `
})
class AppComponent {}

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(routes)],
    declarations: [ AppComponent, HomeComponent, ProductDetailChildComponent,
        ProductDescriptionComponent, SellerInfoComponent],
    providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
