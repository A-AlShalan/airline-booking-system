import { ModalController } from '@ionic/angular';
import { FlightsService } from './../service/flights.service';
import { Flight } from './../service/flights.config';
import { Component, OnInit } from '@angular/core';
import { FlightDetailsComponent } from '../flight-details/flight-details.component';

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
   this.myFlights =  this.flightService.getUserFlights();
  }
  async openModal(id){
    const modal = await this.modalCtrl.create({component: FlightDetailsComponent,
    componentProps:{flight:this.myFlights[id],from:'MyFlightPage'}
  });
     await modal.present();
     modal.onDidDismiss()
     .then((data) => {
       console.log(data);
       ; // Here's your selected user!
   });
    // this.modalCtrl.dismiss().then(res=>{
    //   console.log(res);
    // });
  }
}
