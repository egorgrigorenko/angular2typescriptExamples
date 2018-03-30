import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ProductDetailComponent} from "./components/product_detail/product-detail.component";
import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {LoginGuard} from "./components/guards/login.guard";
import {UnsavedChangesGuard} from "./components/guards/unsaved-changes.guard";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: 'product',
        component: ProductDetailComponent,
        canActivate: [LoginGuard],
        canDeactivate: [UnsavedChangesGuard]
    }
];

@Component({
    selector: 'app',
    template: `
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/product']">Product Details</a>
        <router-outlet></router-outlet>
    `
})
class AppComponent {}

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    declarations: [AppComponent, HomeComponent, ProductDetailComponent],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        LoginGuard,
        UnsavedChangesGuard
    ],
    bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
