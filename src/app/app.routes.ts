import { Routes } from '@angular/router';
import { ApplayoutComponent } from './applayout/applayout.component';

export const routes: Routes = [
    { path: 'home', component: ApplayoutComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
