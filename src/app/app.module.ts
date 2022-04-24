import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FightsCardsComponent } from './fights-cards/fights-cards.component';
import { MyFlightPage } from './pages/my-flight/my-flight.page';

@NgModule({
  declarations: [AppComponent,FightsCardsComponent,FlightDetailsComponent,MyFlightPage],
  entryComponents: [FightsCardsComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
