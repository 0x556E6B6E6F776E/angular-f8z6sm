import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, ReactiveFormsModule],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent,
  ],
  providers: [],
  exports: [FlightSearchComponent, FlightCardComponent, FlightEditComponent],
})
export class FlightBookingModule {}
