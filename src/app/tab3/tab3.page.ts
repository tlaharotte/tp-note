import { Component } from '@angular/core';
// import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
//https://forum.ionicframework.com/t/local-notifications-plugin-capacitor-3/209744
  // createNotif(){
  //   await LocalNotifications.schedule({
  //     notifications: [
  //         {
  //             id: 1,
  //             title: 'TEST',
  //             schedule: {
  //                 on: {
  //                     hour: 12,
  //                     minute: 30,
  //                 },
  //                 allowWhileIdle: true,
  //             },
  //         },
  //     ],
  //   })
  // }

}
