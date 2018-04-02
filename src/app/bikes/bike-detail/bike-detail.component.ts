import { Component, OnInit, Input } from '@angular/core';
import { Bike } from '../bike.model';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent implements OnInit {
  @Input() bike: Bike;

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
  }

  onAddToGearList() {
    this.bikeService.addBikeComponentsToGearList(this.bike.bikeComponents);
  }

}
