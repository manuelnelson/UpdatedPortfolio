import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot } from '@angular/router';
import { InventoryService } from '../../services';
import { Inventory } from '../../models';
@Injectable()
export class InventoryResolver implements Resolve<Array<Inventory>> {
    constructor(private inventoryService: InventoryService, private router: Router) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Array<Inventory>> {
        return this.inventoryService.list().map(inventorys => inventorys).toPromise();
    }
}
