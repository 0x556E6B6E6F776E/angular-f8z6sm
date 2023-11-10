import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../../entities/flight';
import { AbstractFlightService } from './abstract-flight.service';
import FlightObserver from './flight-search.observable';

@Injectable({ providedIn: 'root' })
export class FlightService implements AbstractFlightService {
  find(): Observable<Flight[]> {
    return FlightObserver();
  }
}
