import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { UserComponent } from "./components/user/user.component";
import { UserDetailComponent } from "./components/user/user-detail.component";
import { UserEditComponent } from "./components/user/user-edit.component";
import { UserNewComponent } from "./components/user/user-new.component";



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'user/:id', component: UserComponent, children: [
        {path: 'new', component: UserNewComponent}, 
        {path: 'edit', component: UserEditComponent}, 
        {path: 'detail', component: UserDetailComponent},
        { path: '**', pathMatch: 'full', redirectTo: 'detail'}]},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);