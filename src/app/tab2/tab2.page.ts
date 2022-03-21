import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  coordinates: any
  printCurrentPosition = async () => {
    const coord = await Geolocation.getCurrentPosition();
  
    this.coordinates=coord;
  };

  constructor() {
    this.printCurrentPosition();
  }

  
}
