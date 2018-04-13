import { Injectable } from '@angular/core';
import { BikeService } from '../bikes/bike.service';
import { Bike } from '../bikes/bike.model';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient, private bikeService: BikeService, private authService: AuthService) {}

    storeBikes() {
        const token = this.authService.getToken();
        return this.httpClient.put('https://gear-check.firebaseio.com/bikes.json?auth=' + token, this.bikeService.getBikes());
    }

    getBikes() {
        const token = this.authService.getToken();
        this.httpClient.get<Bike[]>('https://gear-check.firebaseio.com/bikes.json?auth=' + token)
            .map(
                (bikes) => {
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
