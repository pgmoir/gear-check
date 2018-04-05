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
  private bikeChangedSubscription: Subscription;

  constructor(private glService: GearListService) { }

  ngOnInit() {
    this.bikeComponents = this.glService.getBikeComponents();
    this.bikeChangedSubscription = this.glService.bikeComponentsChanged
      .subscribe(
        (bikeComponents: BikeComponent[]) => {
          this.bikeComponents = bikeComponents;
        }
      );
  }

  ngOnDestroy() {
    this.bikeChangedSubscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.glService.startedEditing.next(index);
}}
