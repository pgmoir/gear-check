import { Component, OnInit, OnDestroy } from '@angular/core';
import { BikeComponent } from '../shared/bike-component.model';
import { GearListService } from './gear-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-gear-list',
  templateUrl: './gear-list.component.html',
  styleUrls: ['./gear-list.component.css']
})
export class GearListComponent implements OnInit, OnDestroy {
  bikeComponents: BikeComponent[];
  bikeChangedSubscription: Subscription;

  constructor(private slService: GearListService) { }

  ngOnInit() {
    this.bikeComponents = this.slService.getBikeComponents();
    this.slService.bikeComponentsChanged
      .subscribe(
        (bikeComponents: BikeComponent[]) => {
          this.bikeComponents = bikeComponents;
        }
      );
  }

  ngOnDestroy() {
    this.bikeChangedSubscription.unsubscribe();
  }

}
