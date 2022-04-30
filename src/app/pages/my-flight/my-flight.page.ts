import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FlightDetailsComponent } from 'src/app/flight-details/flight-details.component';
import { Flight } from 'src/app/service/flights.config';
import { FlightsService } from 'src/app/service/flights.service';

@Component({
  selector: 'app-my-flight',
  templateUrl: './my-flight.page.html',
  styleUrls: ['./my-flight.page.scss'],
})
export class MyFlightPage implements OnInit {
  myFlights: Flight[];
  constructor(private flightService: FlightsService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.flightService.getUserFlights().subscribe(res=>{
    });
  }
  async openModal(id){
    const modal = await this.modalCtrl.create({component: FlightDetailsComponent,
    componentProps:{flight:this.myFlights[id],from:'MyFlightPage'}
  });
     await modal.present();
     modal.onDidDismiss()
     .then((data) => {
   });

  }
}
