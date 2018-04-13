import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BikesComponent } from './bikes.component';
import { BikeStartComponent } from './bike-start/bike-start.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { BikeEditComponent } from './bike-edit/bike-edit.component';
import { BikeItemComponent } from './bike-list/bike-item/bike-item.component';
import { BikesRoutingModule } from './bikes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        BikesComponent,
        BikeStartComponent,
        BikeListComponent,
        BikeDetailComponent,
        BikeEditComponent,
        BikeItemComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BikesRoutingModule,
        SharedModule
    ]
})
export class BikesModule {

}
