import { Directive, Input } from '@angular/core';
import { map, delay } from 'rxjs/operators';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { AbstractFlightService } from '../../app/flight-booking/flight-search/abstract-flight.service';
import { Observable } from 'rxjs';

@Directive({
  selector: '[asyncCity]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: AsyncCityValidatorDirective,
      multi: true,
    },
  ],
})
export class AsyncCityValidatorDirective implements AsyncValidator {
  constructor(private flightService: AbstractFlightService) {}

  validate(c: AbstractControl): Observable<ValidationErrors | null> {
    return this.flightService.find(c.value, '').pipe(
      map((flights) => (flights.length > 0 ? {} : { asyncCity: true })),
      delay(4000)
    );
  }
}
