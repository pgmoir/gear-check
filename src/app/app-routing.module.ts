import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { GearListComponent } from './gear-list/gear-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/bikes', pathMatch: 'full' },
    { path: 'bikes', component: BikesComponent },
    { path: 'gear-list', component: GearListComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
