// ionic-toast.service.ts
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Network } from '@capacitor/network';

@Injectable({
  providedIn: 'root'
})
export class IonicToastService {

  private myToast: any;
  private  net: any;

  logCurrentNetworkStatus = async () => {
    const status = await Network.getStatus();
  
    console.log('Network status:', status);
  };

  constructor(
    private toast: ToastController
  ) { Network.addListener('networkStatusChange', status => {
    this.net=status;
  });}

  
  showToast() {
    this.myToast = this.toast.create({
      message: this.net,
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  HideToast() {
    this.myToast = this.toast.dismiss();
  }

}