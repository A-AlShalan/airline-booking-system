/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Flight } from './flights.config';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  flgihts_obj: Flight[] = [
    {
      id: 1,
      name: 'Flight 1',
      distination: 'Riyadh',
      from: 'Dhahran',
      date: new Date('2022-4-22'),
      price: 200,
    },
    {
      id: 2,
      name: 'Flight 2',
      distination: 'Jeddah',
      from: 'Dhahran',
      date: new Date('2022-4-22'),
      price: 200,
    },
    {
      id: 3,
      name: 'Flight 3',
      distination: 'Dammam',
      from: 'Jedah',
      date: new Date('2022-4-22'),
      price: 200,
    },
    {
      id: 4,

      name: 'Flight 4',
      distination: 'Qassim',
      from: 'Riyadh',
      date: new Date('2022-4-22'),
      price: 200,
    },
    {
      id: 5,

      name: 'Flight 5',
      distination: 'Riyadh',
      from: 'Dhahran',
      date: new Date('2022-4-22'),
      price: 200,
    },
    {
      id: 6,

      name: 'Flight 6',
      distination: 'Riyadh',
      from: 'Dhahran',
      date: new Date('2022-4-22'),
      price: 200,
    },
    {
      id: 7,

      name: 'Flight 7',
      distination: 'Riyadh',
      from: 'Dhahran',
      date: new Date('2022-4-22'),
      price: 200,
    },
    {
      id: 8,

      name: 'Flight 8',
      distination: 'Riyadh',
      from: 'Dhahran',
      date: new Date('2022-4-22'),
      price: 200,
    },
  ];
  user_flights: Flight[] = [
    {
      id: 7,

      name: 'Flight 7',
      distination: 'Riyadh',
      from: 'Dhahran',
      date: new Date('2022-4-22'),
      price: 200,
    },
    {
      id: 8,

      name: 'Flight 8',
      distination: 'Riyadh',
      from: 'Dhahran',
      date: new Date('2022-4-22'),
      price: 200,
    },
  ];
  constructor() {}
  getAllFlights() {
    return this.flgihts_obj;
  }
  getUserFlights() {
    return this.user_flights;
  }
  addFlight(id){
    this.user_flights.push(this.flgihts_obj[id]);
  }
  deleteTicket(id: number){
    console.log(id);
    this.user_flights = this.user_flights.filter(obj => obj.id !== id);
    console.log('This is from the servic:', this.user_flights);
  }
}
