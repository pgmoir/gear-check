import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BikeService } from '../bikes/bike.service';
import { Bike } from '../bikes/bike.model';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private bikeService: BikeService) {}

    storeBikes() {
        return this.http.put('https://gear-check.firebaseio.com/bikes.json', this.bikeService.getBikes());
    }

    getBikes() {
        this.http.get('https://gear-check.firebaseio.com/bikes.json')
            .map(
                (response: Response) => {
                    const bikes: Bike[] = response.json();
                    for (const bike of bikes) {
                        if (!bike['bikeComponents']) {
                            bike['bikeComponents'] = [];
                        }
                    }
                    return bikes;
                }
            )
            .subscribe(
                (bikes: Bike[]) => {
                    this.bikeService.setBikes(bikes);
                }
            );
    }
}
