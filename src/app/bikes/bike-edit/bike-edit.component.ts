import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-bike-edit',
  templateUrl: './bike-edit.component.html',
  styleUrls: ['./bike-edit.component.css']
})
export class BikeEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode = false;
  routeParamsSubscription: Subscription;
  bikeForm: FormGroup;

  constructor(private route: ActivatedRoute, private bikeService: BikeService) { }

  ngOnInit() {
    this.routeParamsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm() {
    let bikeName = '';
    let bikeImagePath = '';
    let bikeDescription = '';
    const bikeComponents = new FormArray([]);

    if (this.editMode) {
      const bike = this.bikeService.getBike(this.id);
      bikeName = bike.name;
      bikeImagePath = bike.imagePath;
      bikeDescription = bike.description;

      if (bike['bikeComponents']) {
        for (const component of bike.bikeComponents) {
          bikeComponents.push(
            new FormGroup({
              'name': new FormControl(component.name, Validators.required),
              'amount': new FormControl(component.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.bikeForm = new FormGroup({
      'name': new FormControl(bikeName, Validators.required),
      'imagePath': new FormControl(bikeImagePath, Validators.required),
      'description': new FormControl(bikeDescription, Validators.required),
      'bikeComponents': bikeComponents
    });
  }

  onAddBikeComponent() {
    (<FormArray>this.bikeForm.get('bikeComponents')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onSubmit() {
    console.log(this.bikeForm);
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe();
  }
}
