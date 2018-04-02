import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeListComponent } from './bikes/bike-list/bike-list.component';
import { BikeDetailComponent } from './bikes/bike-detail/bike-detail.component';
import { BikeItemComponent } from './bikes/bike-list/bike-item/bike-item.component';
import { GearListComponent } from './gear-list/gear-list.component';
import { GearEditComponent } from './gear-list/gear-edit/gear-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { GearListService } from './gear-list/gear-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BikesComponent,
    BikeListComponent,
    BikeDetailComponent,
    BikeItemComponent,
    GearListComponent,
    GearEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [GearListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
