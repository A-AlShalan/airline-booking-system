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

  ionViewWillEnter(){
    console.log(this.flight);
    console.log(this.from);

  }
 async buyTicket(){
   console.log(this.flight);

    const loading = await this.loadingController.create({
      message: 'Buying is in proccess ...',
      duration: 2000
    });
    await loading.present();
    await loading.onDidDismiss();
    this.modalCntl.dismiss();
    this.flightService.addFlight(this.flight.id);
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
