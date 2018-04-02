import { Bike } from './bike.model';
import { EventEmitter, Injectable } from '@angular/core';
import { BikeComponent } from '../shared/bike-component.model';
import { GearListService } from '../gear-list/gear-list.service';

@Injectable()
export class BikeService {
    bikeSelected = new EventEmitter<Bike>();

    private bikes: Bike[] = [
        new Bike('Merida',
        'Carbon road bike',
        '/assets/images/bikes/IMG_0000.JPG',
        [
            new BikeComponent('Rings', 2),
            new BikeComponent('Cassette', 10)
        ]),
        new Bike('Sab',
        'Daily commute road bike',
        '/assets/images/bikes/IMG_4814.JPG',
        [
            new BikeComponent('Rings', 2),
            new BikeComponent('Cassette', 10)
        ]),
        new Bike('Dolan Gold',
        'Track bike (sold)',
        '/assets/images/bikes/IMG_5229.JPG',
        [
            new BikeComponent('Rings', 1),
            new BikeComponent('Cassette', 1)
        ]),
        new Bike('Cinelli',
        'A disguised Dolan cross bike',
        '/assets/images/bikes/IMG_4817.JPG',
        [
            new BikeComponent('Rings', 1),
            new BikeComponent('Cassette', 9)
        ]),
      ];

    constructor(private slService: GearListService) {}

    getBikes() {
        return this.bikes.slice();
    }

    addBikeComponentsToGearList(bikeComponents: BikeComponent[]) {
        this.slService.addBikeComponents(bikeComponents);
    }
}
