import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AlertService } from '../services';
import { Inventory } from '../models';
import 'rxjs/add/operator/map'

@Injectable()
export class InventoryService {
    constructor(private http: Http) { }
    private apiEndpointUrl: string = '/api/inventorys';

    create(inventory: Inventory) {
        // add authorization header with jwt token
        // let headers = new Headers({ 'Authorization': this.authService.token });
        // let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiEndpointUrl, inventory)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let inventory = response.json();
                if (inventory) {
                    return inventory;
                }
            });
    }
    update(inventory: Inventory) {
        // add authorization header with jwt token
        // let headers = new Headers({ 'Authorization': this.authService.token });
        // let options = new RequestOptions({ headers: headers });
        return this.http.put(this.apiEndpointUrl + '/' +        inventory._id, inventory)
            .map((response: Response) => {
                // update successful - return inventory
                let inventory = response.json();
                if (inventory) {
                    return inventory;
                }
            });
    }

    list() {
        // add authorization header with jwt token
        // let headers = new Headers({ 'Authorization': this.authService.token });
        // let options = new RequestOptions({ headers: headers });

        return this.http.get(this.apiEndpointUrl)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let inventorys = response.json() as Array<Inventory>;
                return inventorys;
            });
    }
    get(id: string) {
        // add authorization header with jwt token
        // let headers = new Headers({ 'Authorization': this.authService.token });
        // let options = new RequestOptions({ headers: headers });

        return this.http.get(this.apiEndpointUrl + '/' + id)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let inventory = response.json() as Inventory;
                return inventory;
            });
    }
    delete(id: string) {
        // add authorization header with jwt token
        // let headers = new Headers({ 'Authorization': this.authService.token });
        // let options = new RequestOptions({ headers: headers });

        return this.http.delete(this.apiEndpointUrl + '/' + id)
            .map((response: Response) => {
                let inventory = response.json() as Inventory;
                return inventory;
            });
    }

}
