import { Pipe, PipeTransform } from '@angular/core';
import { RentalDetail } from '../models/rental';

@Pipe({
  name: 'rentalFilter'
})

export class RentalFilterPipe implements PipeTransform {

  transform(value: RentalDetail[], filterText: boolean): RentalDetail[] {
    
    
    if(filterText){
      return value.filter((b:RentalDetail) => b.returnDate !== null ) 
    } else {
      return value.filter((b:RentalDetail) => b.returnDate === null ) 
    }

  }
}
