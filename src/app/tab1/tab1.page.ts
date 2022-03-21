import { Component } from '@angular/core';
import { IonicToastService } from '../services/ionic-toast.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private ionicToastService: IonicToastService
  ) { }

  showMyToast() {
    this.ionicToastService.showToast();
  }
  hideMyToast() {
    this.ionicToastService.HideToast();
  }

}