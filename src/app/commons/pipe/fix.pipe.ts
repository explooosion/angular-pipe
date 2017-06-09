import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fix'
})
export class FixPipe implements PipeTransform {

  transform(value: number, format: number): any {

    // fixed number
    return value.toFixed(format);
  }

}
