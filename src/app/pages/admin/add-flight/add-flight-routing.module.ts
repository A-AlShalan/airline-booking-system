import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFlightPage } from './add-flight.page';

const routes: Routes = [
  {
    path: '',
    component: AddFlightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFlightPageRoutingModule {}
