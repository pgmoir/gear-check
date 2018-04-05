import { BikeComponent } from '../shared/bike-component.model';
import { Subject } from 'rxjs/Subject';

export class GearListService {
    bikeComponentsChanged = new Subject<BikeComponent[]>();
    startedEditing = new Subject<number>();
    private bikeComponents: BikeComponent[] = [
        new BikeComponent('Apples', 5),
        new BikeComponent('Tomatoes', 11)
    ];

    getBikeComponents() {
        return this.bikeComponents.slice();
    }

    getBikeComponent(index: number) {
        return this.bikeComponents[index];
    }

    addBikeComponent(bikeComponent: BikeComponent) {
        this.bikeComponents.push(bikeComponent);
        this.bikeComponentsChanged.next(this.bikeComponents.slice());
    }

    addBikeComponents(bikeComponents: BikeComponent[]) {
        this.bikeComponents.push(...bikeComponents);
        this.bikeComponentsChanged.next(this.bikeComponents.slice());
    }

    updateBikeComponent(index: number, bikeComponent: BikeComponent) {
        this.bikeComponents[index] = bikeComponent;
        this.bikeComponentsChanged.next(this.bikeComponents.slice());
    }

    deleteBikeComponent(index: number) {
        this.bikeComponents.splice(index, 1);
        this.bikeComponentsChanged.next(this.bikeComponents.slice());
    }
}
