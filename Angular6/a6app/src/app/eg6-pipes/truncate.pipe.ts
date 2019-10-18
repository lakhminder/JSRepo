import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
/**
 * This will truncate the string to limit if passed as 1st argument (else default to 30)
 * and add trailing characters passed as 2nd argument(default ***)
 * 
 * @param value input value passed as left of pipe operator
 * @param args additional arguments passed
 */
  transform(value: any, args?: any): any {
    const limit = args.length > 0 ? parseInt(args[0], 10) : 30;
    const trail = args.length > 1 ? args[1] : '***';
    return value.length > limit ? value.substring(0,limit) + trail : value;
  }

}
