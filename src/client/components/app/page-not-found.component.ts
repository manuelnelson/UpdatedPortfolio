import { ActivatedRoute} from '@angular/router';
import { Component } from '@angular/core';
import { AlertService } from '../../services';
@Component({
    template: require('./page-not-found.component.html')
})
export class PageNotFoundComponent{
    constructor(private alertService: AlertService, private route: ActivatedRoute){

        }
}
