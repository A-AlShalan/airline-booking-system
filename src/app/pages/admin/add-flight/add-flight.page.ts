import { FlightsService } from 'src/app/service/flights.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.page.html',
  styleUrls: ['./add-flight.page.scss'],
})
export class AddFlightPage implements OnInit {
  name;
  distination;
  from;
  date;
  price;
  constructor(private flightService: FlightsService,
              private router: Router,
              private loadingController: LoadingController) { }

  ngOnInit() {
  }
  async addFlight(){
    const id = Math. floor(Math. random() * (100 - 0 + 1)) + 0;
    const obj = {
      id,
      name:this.name,
      distination:this.distination,
      from:this.from,
      date:this.date,
      price:this.price
    };
    console.log('This is obj: ',obj);
    this.flightService.addFlight(obj);
    const loading = await this.loadingController.create({
      message: 'Adding Flight...',
      duration: 2000
    });
    await loading.present();
    this.router.navigate(['admin']);
  }
}
