import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFlightPageRoutingModule } from './add-flight-routing.module';

import { AddFlightPage } from './add-flight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFlightPageRoutingModule
  ],
  declarations: [AddFlightPage]
})
export class AddFlightPageModule {}
