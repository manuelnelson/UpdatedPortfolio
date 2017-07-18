import { Component } from '@angular/core';
import { AlertService } from '../../services';
import { Home } from '../../models';
import { ActivatedRoute} from '@angular/router';

@Component({
    template: require('./home.component.html')
})
export class HomeComponent {
    home: Home;

    constructor(private alertService: AlertService, private route: ActivatedRoute) {
        this.home = this.route.snapshot.data["home"];
    }

}
