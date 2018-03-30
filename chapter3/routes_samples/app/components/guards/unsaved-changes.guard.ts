import {ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot} from "@angular/router";
import {ProductDetailComponent} from "../product_detail/product-detail.component";
import {Injectable} from "@angular/core";

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductDetailComponent> {
    constructor(private _router: Router) {}


    canDeactivate(component: ProductDetailComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return window.confirm("You have unsaved changes. Still want to leave?");
    }
}