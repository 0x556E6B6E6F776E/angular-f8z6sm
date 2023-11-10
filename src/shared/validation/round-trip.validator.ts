import { Directive, Input } from '@angular/core';
import {
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: 'roundTrip',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RoundTripValidatorDirective,
      multi: true,
    },
  ],
})
export class RoundTripValidatorDirective implements Validator {
  @Input() city: string[];

  validate(formGroup: FormGroup): ValidationErrors | null {
    let from = formGroup.controls['from'];
    let to = formGroup.controls['to'];

    if (!from || !to) return null;

    if (from.value == '' || to.value == '') {
      return {};
    }

    if (from.value == to.value) {
      return {
        roundTrip: {
          value: true,
        },
      };
    }

    return null;
  }
}
