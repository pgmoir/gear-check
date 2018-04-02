import { Bike } from './bike.model';
import { EventEmitter, Injectable } from '@angular/core';
import { BikeComponent } from '../shared/bike-component.model';
import { GearListService } from '../gear-list/gear-list.service';

@Injectable()
export class BikeService {
    bikeSelected = new EventEmitter<Bike>();

    private bikes: Bike[] = [
        new Bike('Steak and chips',
        'Recreate the ultimate bistro meal at home. Yum.',
        'https://upload.wikimedia.org/wikipedia/commons/c/c7/Steak_and_fries.jpeg',
        [
            new BikeComponent('Silrloin', 1),
            new BikeComponent('French fries', 20)
        ]),
        new Bike('Apple salad',
        'Switch up your fall meals by incorporating a delicious apple salad.',
        'https://c1.staticflickr.com/8/7210/6984767505_dc12ee34fc_b.jpg',
        [
            new BikeComponent('Silrloin', 1),
            new BikeComponent('French fries', 20)
        ]),
        new Bike('Moroccan stew',
        'Stir in the ground coriander, cumin, chilli and cinnamon. Cook for 2 mins, stirring occasionally. '
         + 'Season with plenty of ground black pepper.',
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/Tagine_au_poisson.jpeg',
        [
            new BikeComponent('Silrloin', 1),
            new BikeComponent('French fries', 20)
        ]),
        new Bike('Soufflé',
        'A soufflé is a baked egg-based dish which originated in early eighteenth century France.',
        'https://upload.wikimedia.org/wikipedia/commons/7/70/Souffl%C3%A9.JPG',
        [
            new BikeComponent('Silrloin', 1),
            new BikeComponent('French fries', 20)
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
