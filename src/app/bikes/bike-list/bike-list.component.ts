import { Component, OnInit, OnDestroy } from '@angular/core';
import { Bike } from '../bike.model';
import { BikeService } from '../bike.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit, OnDestroy {
  bikes: Bike[];
  subscription: Subscription;

  constructor(private bikeService: BikeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.bikeService.bikesChanged.subscribe(
      (bikes: Bike[]) => {
        this.bikes = bikes;
      }
    );
    this.bikes = this.bikeService.getBikes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addNewBike() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
