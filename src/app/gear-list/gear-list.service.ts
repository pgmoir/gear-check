import { BikeComponent } from '../shared/bike-component.model';
import { EventEmitter } from '@angular/core';

export class GearListService {
    bikeComponentsChanged = new EventEmitter<BikeComponent[]>();
    private bikeComponents: BikeComponent[] = [
        new BikeComponent('Apples', 5),
        new BikeComponent('Tomatoes', 11)
    ];

    getBikeComponents() {
        return this.bikeComponents.slice();
    }

    addBikeComponent(bikeComponent: BikeComponent) {
        this.bikeComponents.push(bikeComponent);
        this.bikeComponentsChanged.emit(this.bikeComponents.slice());
    }

    addBikeComponents(bikeComponents: BikeComponent[]) {
        this.bikeComponents.push(...bikeComponents);
        this.bikeComponentsChanged.emit(this.bikeComponents.slice());
    }
}
