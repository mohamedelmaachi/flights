import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'if_null'
})
export class IfNullPipe {
  transform(value) {
    return value === null ? 'N/A' : value;
  }
}
