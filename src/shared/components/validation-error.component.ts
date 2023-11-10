import { Component, Input } from '@angular/core';

@Component({
  selector: 'validation-error',
  templateUrl: './validation-error.component.html',
})
export class ValidationErrorComponent {
  @Input() errors: any;
}
