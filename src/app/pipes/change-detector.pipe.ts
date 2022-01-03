import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeDetector'
})
export class ChangeDetectorPipe implements PipeTransform {
  count = 0;

  transform(value: unknown, ...args: unknown[]): unknown {
    this.count++;
    console.log(`Component change detection executed ${this.count} times`);
    return value;
  }

}
