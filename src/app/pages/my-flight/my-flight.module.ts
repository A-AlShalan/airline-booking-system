import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyFlightPageRoutingModule } from './my-flight-routing.module';

import { MyFlightPage } from './my-flight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyFlightPageRoutingModule
  ],
  declarations: [MyFlightPage]
})
export class MyFlightPageModule {}
