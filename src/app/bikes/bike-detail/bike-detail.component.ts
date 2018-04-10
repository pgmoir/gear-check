import { Component, OnInit, OnDestroy } from '@angular/core';
import { Bike } from '../bike.model';
import { BikeService } from '../bike.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent implements OnInit, OnDestroy {
  bike: Bike;
  id: number;
  routeParamsSubscription: Subscription;

  constructor(private bikeService: BikeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.routeParamsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.bike = this.bikeService.getBike(this.id);
        }
      );
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe();
  }

  onAddToGearList() {
    this.bikeService.addBikeComponentsToGearList(this.bike.bikeComponents);
  }

  editBike() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  deleteBike() {
    this.bikeService.deleteBike(this.id);
    this.router.navigate(['/bikes'], { relativeTo: this.route });
  }

}
