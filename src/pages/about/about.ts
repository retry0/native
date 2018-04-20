import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Calendar } from '@ionic-native/calendar';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  coords: any;
  accuracy:any;
  error:any;

  constructor(public navCtrl: NavController,
              public geolocation: Geolocation,
              private calender: Calendar) {
  }

  mendapatkanPosisi(){
    console.log('Klik Button');
    this.geolocation.getCurrentPosition().then((resp)=>{
      this.coords = resp + ','+ resp.coords.longitude;
      this.accuracy = resp.coords.accuracy + ' Meters';
    }).catch((error)=>{
      this.error = 'Tidak mendapatkan lokasi ! ' +error;
    });
  }

  kalenderKu(){
    this.calender.createCalendar('MyCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
  }

}
