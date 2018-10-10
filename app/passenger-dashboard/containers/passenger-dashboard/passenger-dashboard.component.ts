import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
      <div>
        <passenger-count
          [items]="passengers">
        </passenger-count>
        <div *ngFor="let passenger of passengers;">
          {{ passenger.fullname}}
        </div>

        <passenger-detail
          *ngFor="let passenger of passengers;"
          [detail]="passenger"
          (edit)="handleEdit($event)"
          (remove)="handleRemove($event)">
        </passenger-detail>
			</div>
    `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor(
    private passengerService: PassengerDashboardService
  ) {}

  ngOnInit() {
    console.log('ngOnInit');
    this.passengers = this.passengerService.getPassengers();
  }

  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }
}