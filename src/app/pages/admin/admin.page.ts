import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  addFlight(){
    this.router.navigate(['admin/add-flight']);
  }
  goFlightLists(){
    this.router.navigate(['admin/flight-list']);
  }
  logout(){
    this.router.navigate(['login']);
  }
}
