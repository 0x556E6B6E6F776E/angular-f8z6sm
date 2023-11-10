import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from '../../app/entities/flight';

@Pipe({
  name: 'statusFilter',
  pure: true,
})
export class StatusFilterPipe implements PipeTransform {
  transform(flights: Array<Flight>, value: boolean): Array<Flight> {
    return flights.filter((flight) => flight.delayed === value);
  }
}
