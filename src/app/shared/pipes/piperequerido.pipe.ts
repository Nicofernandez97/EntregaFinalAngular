import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/dashboard/modules/users/models';

@Pipe({
  name: 'piperequerido'
})
export class PiperequeridoPipe implements PipeTransform {

  transform(value: User, ...args: unknown[]): unknown {
    return value.name  + " " + value.lastName ;
  }

}
