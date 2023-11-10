import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color',
  pure: true,
})
export class ColorPipe implements PipeTransform {
  transform(value: boolean) {
    return value ? '#fcba03' : '#000000';
  }
}
