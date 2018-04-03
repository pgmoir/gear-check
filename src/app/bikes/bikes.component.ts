import { Component, OnInit, OnDestroy } from '@angular/core';
import { Bike } from './bike.model';
import { BikeService } from './bike.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css'],
  providers: [BikeService]
})
export class BikesComponent implements OnInit, OnDestroy {
  selectedBike: Bike;
  bikeSelectedSubscription: Subscription;

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.bikeSelectedSubscription = this.bikeService.bikeSelected
      .subscribe(
        (bike: Bike) => {
          this.selectedBike = bike;
        }
      );
  }

  ngOnDestroy() {
    this.bikeSelectedSubscription.unsubscribe();
  }
}
