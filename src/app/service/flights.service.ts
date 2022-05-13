/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Flight } from './flights.config';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  url: 'http://localhost:8080/';
  flgihts_obj = [
    // {
    //   id: 1,
    //   name: 'Flight 1',
    //   distination: 'Riyadh',
    //   from: 'Dhahran',
    //   date: '2022-4-22',
    //   price: '200',
    // },
    // {
    //   id: 2,
    //   name: 'Flight 2',
    //   distination: 'Jeddah',
    //   from: 'Dhahran',
    //   date: '2022-4-22',
    //   price: '200',
    // },
    // {
    //   id: 3,
    //   name: 'Flight 3',
    //   distination: 'Dammam',
    //   from: 'Jedah',
    //   date: '2022-4-22',
    //   price: '200',
    // },
    // {
    //   id: 4,
    //   name: 'Flight 4',
    //   distination: 'Qassim',
    //   from: 'Riyadh',
    //   date: '2022-4-22',
    //   price: '200',
    // },
    // {
    //   id: 5,
    //   name: 'Flight 5',
    //   distination: 'Riyadh',
    //   from: 'Dhahran',
    //   date: '2022-4-22',
    //   price: '200',
    // },
    // {
    //   id: 6,
    //   name: 'Flight 6',
    //   distination: 'Riyadh',
    //   from: 'Dhahran',
    //   date: '2022-4-22',
    //   price: '200',
    // },
    // {
    //   id: 7,
    //   name: 'Flight 7',
    //   distination: 'Riyadh',
    //   from: 'Dhahran',
    //   date: '2022-4-22',
    //   price: '200',
    // },
    // {
    //   id: 8,
    //   name: 'Flight 8',
    //   distination: 'Riyadh',
    //   from: 'Dhahran',
    //   date: '2022-4-22',
    //   price: '200',
    // },
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
    return this.http
      .get('http://localhost:8080/flights')
      .toPromise()
      .then((res: any[]) => {
        console.log('This is the res: ',res);
        this.flgihts_obj = res;
      });
  }
  getUserFlights(email: string) {
    return this.http.get('http://localhost:8080/userFlights/',{params:{email}}).pipe();
  }
  addFlight(obj): Promise<any> {
    return this.http.post('http://localhost:8080/addFlight',obj).toPromise();
  }
  serveFlight(obj,user) {
    this.user_flights.push(obj);
      const param = {
        classType: 'TEST',
        seatNumber: '222',
        email: user.email
      };
    this.http.post('http://localhost:8080/'+obj.flightID+'/addTicket',param).toPromise();
  }
  deleteTicket(id: number) {
    this.user_flights = this.user_flights.filter((obj) => obj.id !== id);
  }
  sendEmail(obj: Flight) {
    // eslint-disable-next-line max-len
    const emailBody =
      'Hi dear passenger,\
    This is an email for your flight.\
    The flight at: ' +
      obj.date +
      '\
    It is from: ' +
      obj.from +
      '\
    To: ' +
      obj.distination +
      '\
    If you face any issue please contact us at XXXXXXXXXXX';
    const email = {
      to: 'abofahd14@icloud.com',
      subject: 'Flight System',
      body: emailBody,
      isHtml: true,
    };
    window.open(
      'mailto:' + email.to + '?subject=' + email.subject + '&body=' + email.body
    );
  }
}
