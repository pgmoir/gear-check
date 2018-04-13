import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './bikes.component';
import { BikeStartComponent } from './bike-start/bike-start.component';
import { BikeEditComponent } from './bike-edit/bike-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';

const bikeRoutes: Routes = [
    { path: '', component: BikesComponent, children: [
        { path: '', component: BikeStartComponent },
        { path: 'new', component: BikeEditComponent, canActivate: [AuthGuard] },
        { path: ':id', component: BikeDetailComponent },
        { path: ':id/edit', component: BikeEditComponent, canActivate: [AuthGuard] }
    ] }
];
@NgModule ({
    imports: [RouterModule.forChild(bikeRoutes)],
    exports: [RouterModule]
})
export class BikesRoutingModule {}
