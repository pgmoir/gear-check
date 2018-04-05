import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { BikeComponent } from '../../shared/bike-component.model';
import { GearListService } from '../gear-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-gear-edit',
  templateUrl: './gear-edit.component.html',
  styleUrls: ['./gear-edit.component.css']
})
export class GearEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') glForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: BikeComponent;

  constructor(private glService: GearListService) { }

  ngOnInit() {
    this.subscription = this.glService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.glService.getBikeComponent(index);
          this.glForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newBikeComponent = new BikeComponent(value.name, value.amount);
    if (this.editMode) {
      this.glService.updateBikeComponent(this.editedItemIndex, newBikeComponent);
    } else {
      this.glService.addBikeComponent(newBikeComponent);
    }
    this.editMode = false;
    this.glForm.reset();
  }

  onDelete() {
    this.glService.deleteBikeComponent(this.editedItemIndex);
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.glForm.reset();
  }

}
