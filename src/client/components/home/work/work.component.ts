import { Component, Input } from '@angular/core';
import { Work } from '../../../models';

@Component({
    selector: 'work-tile',
    template: require('./work.component.html')
})
export class WorkComponent {
    @Input() work: Work;
    showMore: boolean = false;
    constructor() {
    }

    readMore(){
        this.showMore = true;
    }
    close(){
        this.showMore = false;
    }
}
