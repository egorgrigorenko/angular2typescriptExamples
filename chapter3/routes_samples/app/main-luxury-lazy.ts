import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ProductDetailComponent} from "./components/product_detail/product-detail.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {LuxuryModule} from "./components/luxury/luxury.module";

@Component({
    selector: 'app',
    template: `
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/product']">Product Detail</a>
        <a [routerLink]="['/luxury']">Luxury Items</a>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {}

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot([
        {path: '', component: HomeComponent},
        {path: 'product', component: ProductDetailComponent},
        {path: 'luxury', loadChildren: 'app/components/luxury/luxury.lazy.module'}
    ])],
    declarations: [AppComponent, HomeComponent, ProductDetailComponent],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
