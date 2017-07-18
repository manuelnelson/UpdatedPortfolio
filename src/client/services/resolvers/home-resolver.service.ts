import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot } from '@angular/router';
import {  HomeService } from '../../services';
import { Home } from '../../models';
@Injectable()
export class HomeResolver implements Resolve<Home> {
    constructor(private homeService: HomeService, private router: Router) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Home> {
        return this.homeService.list().map(homes => homes[0]).toPromise();
    }
}
