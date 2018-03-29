///<reference path="../node_modules/@angular/platform-browser/src/browser.d.ts"/>
import {ProductDetailParamComponent} from "./components/product_detail/product-detail-param";
import {HomeComponent} from "./components/home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

const routes: Routes = [
    {path: '',        component: HomeComponent},
    {path: 'product/:id', component: ProductDetailParamComponent}
];


@Component({
    selector: 'app',
    template:
    `
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/product', 1234]">ProductDetail</a>
        <router-outlet></router-outlet>
    `
})
class AppComponent {
}

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(routes)],
    declarations: [ AppComponent, HomeComponent, ProductDetailParamComponent],
    providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);