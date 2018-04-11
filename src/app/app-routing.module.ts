import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { GearListComponent } from './gear-list/gear-list.component';
import { BikeStartComponent } from './bikes/bike-start/bike-start.component';
import { BikeDetailComponent } from './bikes/bike-detail/bike-detail.component';
import { BikeEditComponent } from './bikes/bike-edit/bike-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/bikes', pathMatch: 'full' },
    { path: 'bikes', component: BikesComponent, children: [
        { path: '', component: BikeStartComponent },
        { path: 'new', component: BikeEditComponent },
        { path: ':id', component: BikeDetailComponent },
        { path: ':id/edit', component: BikeEditComponent }
    ] },
    { path: 'gear-list', component: GearListComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
