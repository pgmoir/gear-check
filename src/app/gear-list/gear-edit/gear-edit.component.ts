import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BikeComponent } from '../../shared/bike-component.model';
import { GearListService } from '../gear-list.service';

@Component({
  selector: 'app-gear-edit',
  templateUrl: './gear-edit.component.html',
  styleUrls: ['./gear-edit.component.css']
})
export class GearEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private slService: GearListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const newBikeComponent = new BikeComponent(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.slService.addBikeComponent(newBikeComponent);
  }

}
