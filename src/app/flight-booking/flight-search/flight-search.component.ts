import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { AbstractFlightService } from './abstract-flight.service';
@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
})
export class FlightSearchComponent implements OnInit {
  from: string;
  to: string;
  flights: Flight[] = [];
  selectedFlight: Flight;

  basket: object = {};

  showStatus: number = 0;

  constructor(private flightService: AbstractFlightService) {}

  ngOnInit() {}

  search(): void {
    this.flightService.find().subscribe(
      (flights) => this.setFlights(flights),
      (err) => {
        console.error('Error loading flights', err);
      }
    );
  }

  setFlights(flights: Flight[]): void {
    this.flights = flights;
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }

  toggelShowDelayed() {
    if (this.showStatus === 2) {
      this.showStatus = 0;
    } else {
      this.showStatus++;
    }
  }
}
