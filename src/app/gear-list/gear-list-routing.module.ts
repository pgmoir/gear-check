import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { GearListComponent } from './gear-list.component';

const gearListRoutes: Routes = [
    { path: 'gear-list', component: GearListComponent }
];
@NgModule ({
    imports: [RouterModule.forChild(gearListRoutes)],
    exports: [RouterModule]
})
export class GearListRoutingModule {}
