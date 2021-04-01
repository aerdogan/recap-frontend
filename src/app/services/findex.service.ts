import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FindexService {

  constructor() { }

  getPointByCustomerId(customerId:number):number {
    return Math.floor(Math.random() * 1900);
  }

}
