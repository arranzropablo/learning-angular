import { Routes, RouterModule } from '@angular/router';

import { PrivateComponent } from './components/private/private.component';
import { PricesComponent } from './components/prices/prices.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'prices', component: PricesComponent },
    { path: 'private', component: PrivateComponent },
    { path: '**', component: HomeComponent },
];

export const APP_ROUTING = RouterModule.forRoot(routes)