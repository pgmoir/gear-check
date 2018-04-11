import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BikeService } from '../bikes/bike.service';
import { Bike } from '../bikes/bike.model';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private bikeService: BikeService, private authService: AuthService) {}

    storeBikes() {
        const token = this.authService.getToken();
        return this.http.put('https://gear-check.firebaseio.com/bikes.json?auth=' + token, this.bikeService.getBikes());
    }

    getBikes() {
        const token = this.authService.getToken();
        this.http.get('https://gear-check.firebaseio.com/bikes.json?auth=' + token)
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
