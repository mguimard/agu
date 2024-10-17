import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    { path: "",               component: HomeComponent },
    { path: "search/:city",   component: HomeComponent },
    { path: "details",        component: DetailsComponent },
    { path: "**",             redirectTo: "/" }
]
