import { MyFlightPage } from './my-flight/my-flight.page';
/* eslint-disable @typescript-eslint/naming-convention */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FightsCardsComponent } from './fights-cards/fights-cards.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user/flights',
    pathMatch: 'full'
  },
  { path: 'user/flights', component: FightsCardsComponent },
  { path: 'user/profile', component: MyFlightPage },

]
;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
