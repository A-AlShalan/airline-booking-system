import { FlightsService } from './../service/flights.service';
import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Flight } from '../service/flights.config';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss'],
})
export class FlightDetailsComponent implements OnInit {
  @Input() flight: Flight;
  @Input() from: string;

  constructor(private loadingController: LoadingController,
              private modalCntl: ModalController,
               private flightService: FlightsService) { }

  ngOnInit() {}

 async buyTicket(){
    const loading = await this.loadingController.create({
      message: 'Buying is in proccess ...',
      duration: 2000
    });
    await loading.present();
    await loading.onDidDismiss();
    this.modalCntl.dismiss();
    this.flightService.serveFlight(this.flight);
    this.flightService.sendEmail(this.flight);
  }
  async deleteTicket(){
    const loading = await this.loadingController.create({
      message: 'Deleting is in proccess ...',
      duration: 2000
    });
    this.flightService.deleteTicket(this.flight.id);
    const temp = this.flightService.getUserFlights();
    await loading.present();
    await loading.onDidDismiss();
    this.modalCntl.dismiss(temp);
  }
}
