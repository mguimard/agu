import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: "users",
        component: UsersComponent,
        pathMatch: 'full'
    },
    {
        path: "users/:userId",
        component: UsersComponent,
        pathMatch: 'full'
    },
    {
        path: "**",
        component: NotFoundComponent
    }
];
