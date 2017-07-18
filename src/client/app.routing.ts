import { NgModule }                from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeResolver, InventoryResolver } from './services';
// Components
import { HomeComponent, InventoryComponent } from './components';

const routes: Routes = [
    // Root
    // { path: 'home',  component: HomeComponent},
    // { path: '', redirectTo:'/home', pathMatch: 'full'}
    { path: '',  component: HomeComponent, resolve: {home: HomeResolver}},
    { path: 'projects/inventory',  component: InventoryComponent, resolve: {inventories: InventoryResolver}}
    //{ path: '', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
