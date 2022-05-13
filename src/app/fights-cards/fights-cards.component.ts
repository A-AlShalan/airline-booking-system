import { FlightDetailsComponent } from './../flight-details/flight-details.component';
import { FlightsService } from './../service/flights.service';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../service/flights.config';
import { MenuController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

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
  flights: any[] = [];
  searchTerm: string;
  constructor(
    private flightService: FlightsService,
    private modalCtrl: ModalController,
    private menuToggle: MenuController,
    private router: Router
  ) {}

 async ngOnInit() {
  await  this.flightService.getAllFlights();
   this.flights = this.flightService.flgihts_obj;
  }
  ionViewWillEnter() {}
  async openModal(id) {


    const modal = await this.modalCtrl.create({
      component: FlightDetailsComponent,
      componentProps: { flight: this.flights[id] },
    });
    return await modal.present();
  }
  openFirst() {
    this.menuToggle.enable(true, 'first');
    this.menuToggle.open('first');
  }
  checkFilter(event) {
    const title = event.target.value;
    if (title) {
      this.flights = this.flights.filter((val) => {
        console.log(val.distination);
        return val.distination.includes(title);
      });
    } else {
      // this.flights = this.flightService.getAllFlights();
    }
  }
  logout(){
    this.router.navigate(['login']);
  }
}
