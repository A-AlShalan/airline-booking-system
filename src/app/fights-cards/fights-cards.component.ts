import { FlightDetailsComponent } from './../flight-details/flight-details.component';
import { FlightsService } from './../service/flights.service';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../service/flights.config';
import { MenuController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-fights-cards',
  templateUrl: './fights-cards.component.html',
  styleUrls: ['./fights-cards.component.scss'],
})
export class FightsCardsComponent implements OnInit {
  public appPages = [
    { title: 'User', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Admin', url: '/folder/Outbox', icon: 'paper-plane' },
  ];
  flights: Flight[] = [];
  constructor(private flightService: FlightsService,
              private modalCtrl: ModalController,
              private menuToggle: MenuController
            ) { }

  ngOnInit() {
    console.log('In');
  }
  ionViewWillEnter(){
    this.flights = this.flightService.getAllFlights();
  }
  async openModal(id){
    console.log(id);
    console.log(this.flights[id]);

    const modal = await this.modalCtrl.create({component: FlightDetailsComponent,
    componentProps:{flight:this.flights[id]}
  });
    return await modal.present();
  }
  openFirst() {
    this.menuToggle.enable(true, 'first');
    this.menuToggle.open('first');
  }

}
