import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ValidationErrorComponent } from './components/validation-error.component';
import { CityPipe } from './pipes/city.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { StatusFilterPipe } from './pipes/statusFilter.pipe';
import { AsyncCityValidatorDirective } from './validation/async-city.validator';
import { CityValidatorDirective } from './validation/city.validator';
import { RoundTripValidatorDirective } from './validation/round-trip.validator';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CityPipe,
    ColorPipe,
    StatusFilterPipe,
    CityValidatorDirective,
    ValidationErrorComponent,
    AsyncCityValidatorDirective,
    RoundTripValidatorDirective,
  ],
  exports: [
    CityPipe,
    ColorPipe,
    StatusFilterPipe,
    CityValidatorDirective,
    ValidationErrorComponent,
    AsyncCityValidatorDirective,
    RoundTripValidatorDirective,
  ],
})
export class SharedModule {}
