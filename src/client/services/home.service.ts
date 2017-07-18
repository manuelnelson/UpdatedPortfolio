import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AlertService } from '../services';
import { Home } from '../models';
import 'rxjs/add/operator/map'

@Injectable()
export class HomeService {
    constructor(private http: Http) { }
    private apiEndpointUrl: string = '/api/homes';

    create(home: Home) {
        return this.http.post(this.apiEndpointUrl, home)
            .map((response: Response) => {
                let home = response.json();
                if (home) {
                    return home;
                }
            });
    }
    update(home: Home) {
        // // add authorization header with jwt token
        // let headers = new Headers({ 'Authorization': this.authService.token });
        // let options = new RequestOptions({ headers: headers });
        return this.http.put(this.apiEndpointUrl + '/' + home._id, home)
            .map((response: Response) => {
                // update successful - return home
                let home = response.json();
                if (home) {
                    return home;
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
                let homes = response.json() as Array<Home>;
                return homes;
            });
    }
    get(id: string) {
        // add authorization header with jwt token
        // let headers = new Headers({ 'Authorization': this.authService.token });
        // let options = new RequestOptions({ headers: headers });

        return this.http.get(this.apiEndpointUrl + '/' + id)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let home = response.json() as Home;
                return home;
            });
    }
    delete(id: string) {
        // add authorization header with jwt token
        // let headers = new Headers({ 'Authorization': this.authService.token });
        // let options = new RequestOptions({ headers: headers });

        return this.http.delete(this.apiEndpointUrl + '/' + id)
            .map((response: Response) => {
                let home = response.json() as Home;
                return home;
            });
    }

}
