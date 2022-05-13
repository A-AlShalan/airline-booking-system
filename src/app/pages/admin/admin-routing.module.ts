import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'add-flight',
    loadChildren: () => import('./add-flight/add-flight.module').then( m => m.AddFlightPageModule)
  },
  {
    path: 'flight-list',
    loadChildren: () => import('./flight-list/flight-list.module').then( m => m.FlightListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
