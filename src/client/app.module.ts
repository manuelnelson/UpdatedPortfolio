import { NgModule, OnInit } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { HomeService, HomeResolver, AlertService, InventoryService, InventoryResolver } from './services/';
import { AppRoutingModule }  from './app.routing';

import {
    HomeComponent, WorkComponent, NavigationComponent, AppComponent, PageNotFoundComponent, InventoryComponent
} from './components/';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ HomeComponent, WorkComponent, NavigationComponent, AppComponent, PageNotFoundComponent, InventoryComponent],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        Ng2PageScrollModule.forRoot()
    ],
    providers: [ HomeService, HomeResolver, AlertService, InventoryService, InventoryResolver ]
})
export class AppModule{
}
