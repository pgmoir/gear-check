import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GearListComponent } from './gear-list.component';
import { GearEditComponent } from './gear-edit/gear-edit.component';
import { GearListRoutingModule } from './gear-list-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        GearListComponent,
        GearEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        GearListRoutingModule
    ]
})
export class GearListModule {}
