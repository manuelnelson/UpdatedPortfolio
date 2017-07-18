import { Component } from '@angular/core';
import { AlertService } from '../../services';
import { Home, Inventory } from '../../models';
import { ActivatedRoute} from '@angular/router';

@Component({
    template: require('./inventory.component.html')
})
export class InventoryComponent {
    inventories: Array<Inventory>;

    constructor(private alertService: AlertService, private route: ActivatedRoute) {
        this.inventories = this.route.snapshot.data["inventories"];
    }

}
