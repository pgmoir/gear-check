import { Component, OnInit } from '@angular/core';
import { BikeComponent } from '../shared/bike-component.model';
import { GearListService } from './gear-list.service';

@Component({
  selector: 'app-gear-list',
  templateUrl: './gear-list.component.html',
  styleUrls: ['./gear-list.component.css']
})
export class GearListComponent implements OnInit {
  bikeComponents: BikeComponent[];

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
}
