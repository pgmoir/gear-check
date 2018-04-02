import { BikeComponent } from '../shared/bike-component.model';

export class Bike {
    public name: string;
    public description: string;
    public imagePath: string;
    public bikeComponents: BikeComponent[];

    constructor(name: string, description: string, imagePath: string, bikeComponents: BikeComponent[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.bikeComponents = bikeComponents;
    }
}
