import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {ProductDetailComponent} from "./components/product_detail/product-detail.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {routing} from './app.routing';

@NgModule({
    imports: [ BrowserModule, routing ],
    declarations: [ AppComponent, HomeComponent, ProductDetailComponent ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
