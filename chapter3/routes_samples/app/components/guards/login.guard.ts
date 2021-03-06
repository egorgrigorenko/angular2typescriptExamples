import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class LoginGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
        return this.checkIfLoggedIn();
    }

    private checkIfLoggedIn(): boolean {
        let loggedIn = Math.random() < 0.5;
        if (!loggedIn)
            console.log("LoginGuard: The user is not logged in and can't navigate to product details");
        return loggedIn;
    }
}