/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Flight } from './flights.config';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  url: 'http://localhost:8080/';
  flgihts_obj: Flight[] = [
    {
      id: 1,
      name: 'Flight 1',
      distination: 'Riyadh',
      from: 'Dhahran',
      date: '2022-4-22',
      price: '200',
    },
    {
      id: 2,
      name: 'Flight 2',
      distination: 'Jeddah',
      from: 'Dhahran',
      date: '2022-4-22',
      price: '200',
    },
    {
      id: 3,
      name: 'Flight 3',
      distination: 'Dammam',
      from: 'Jedah',
      date: '2022-4-22',
      price: '200',
    },
    {
      id: 4,

      name: 'Flight 4',
      distination: 'Qassim',
      from: 'Riyadh',
      date: '2022-4-22',
      price: '200',
    },
    {
      id: 5,

      name: 'Flight 5',
      distination: 'Riyadh',
      from: 'Dhahran',
      date: '2022-4-22',
      price: '200',
    },
    {
      id: 6,

      name: 'Flight 6',
      distination: 'Riyadh',
      from: 'Dhahran',
      date: '2022-4-22',
      price: '200',
    },
    {
      id: 7,

      name: 'Flight 7',
      distination: 'Riyadh',
      from: 'Dhahran',
      date: '2022-4-22',
      price: '200',
    },
    {
      id: 8,

      name: 'Flight 8',
      distination: 'Riyadh',
      from: 'Dhahran',
      date: '2022-4-22',
      price: '200',
    },
  ];
  user_flights: Flight[] = [
    {
      id: 7,

      name: 'Flight 7',
      distination: 'Riyadh',
      from: 'Dhahran',
      date: '2022-4-22',
      price: '200',
    },
    {
      id: 8,

      name: 'Flight 8',
      distination: 'Riyadh',
      from: 'Dhahran',
      date: '2022-4-22',
      price: '200',
    },
  ];
  constructor(private http: HttpClient) {}
  getAllFlights() {
    return this.flgihts_obj;
  }
  getUserFlights() {
    return this.http.get('http://localhost:8080/').pipe();
  }
  addFlight(obj){
    this.flgihts_obj.push(obj);
  }
  serveFlight(obj){
    this.user_flights.push(obj);
  }
  deleteTicket(id: number){
    console.log(id);
    this.user_flights = this.user_flights.filter(obj => obj.id !== id);
    console.log('This is from the servic:', this.user_flights);
  }
  sendEmail(obj: Flight){
    console.log(obj);
    // eslint-disable-next-line max-len
    const emailBody = 'Hi dear passenger,\
    This is an email for your flight.\
    The flight at: '+obj.date+'\
    It is from: '+obj.from+'\
    To: '+obj.distination+'\
    If you face any issue please contact us at XXXXXXXXXXX';
    const email = {
      to: 'abofahd14@icloud.com',
      subject: 'Flight System',
      body: emailBody,
      isHtml: true
    };
    window.open('mailto:' + email.to+ '?subject='+email.subject+'&body='+email.body);
  }
}
