import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateRoundTrip } from '../../../shared/validation/round-trip.validator';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'flight-edit-form',
  templateUrl: './flight-edit.component.html',
})
export class FlightEditComponent implements OnInit {
  @Input() flight: Flight;

  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [1],
      from: ['', [Validators.required, Validators.minLength(3)]],
      to: [''],
      date: [''],
    });
    this.editForm.validator = validateRoundTrip;
  }
}
