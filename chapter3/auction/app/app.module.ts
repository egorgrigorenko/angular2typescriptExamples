import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import ApplicationComponent from './components/application/application';
import CarouselComponent from "./components/carousel/carousel";
import FooterComponent from "./components/footer/footer";
import NavbarComponent from "./components/navbar/navbar";
import ProductItemComponent from "./components/product-item/product-item";
import SearchComponent from "./components/search/search";
import StarsComponent from "./components/stars/stars";
import {ProductService} from "./services/product-service";
import {RouterModule} from "@angular/router";
import HomeComponent from "./components/home/home";
import ProductDetailComponent from "./components/product-detail/product-detail";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
    imports: [ BrowserModule, RouterModule.forRoot([
        {path: '', component: HomeComponent},
        {path: 'products/:prodTitle', component: ProductDetailComponent}
    ]) ],
    declarations: [
        HomeComponent,
        ApplicationComponent,
        CarouselComponent,
        FooterComponent,
        NavbarComponent,
        ProductItemComponent,
        SearchComponent,
        StarsComponent,
        ProductDetailComponent
    ],
    providers: [ ProductService, {provide: LocationStrategy, useClass: HashLocationStrategy} ],
    bootstrap: [ ApplicationComponent ]
})
export class AppModule {}
