import { Bike } from './bike.model';
import { EventEmitter, Injectable } from '@angular/core';
import { BikeComponent } from '../shared/bike-component.model';
import { GearListService } from '../gear-list/gear-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BikeService {
    bikesChanged = new Subject<Bike[]>();

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

    getBike(index: number) {
        return this.bikes[index];
    }

    addBikeComponentsToGearList(bikeComponents: BikeComponent[]) {
        this.slService.addBikeComponents(bikeComponents);
    }

    addBike(bike: Bike) {
        this.bikes.push(bike);
        this.bikesChanged.next(this.bikes.slice());
    }

    updateBike(index: number, newBike: Bike) {
        this.bikes[index] = newBike;
        this.bikesChanged.next(this.bikes.slice());
    }

    deleteBike(index: number) {
        this.bikes.splice(index, 1);
        this.bikesChanged.next(this.bikes.slice());
    }
}
