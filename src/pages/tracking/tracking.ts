import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationTracker } from '../../providers/location-tracker';
import { BackgroundMode } from '@ionic-native/background-mode';

@Component({
  selector: 'page-tracking',
  templateUrl: 'tracking.html'
})
export class TrackingPage {

  constructor(public navCtrl: NavController,
    public locationTracker: LocationTracker, private backgroundMode: BackgroundMode) {

  }

  start() {
    this.backgroundMode.enable();
    console.log("background mode enabled" + this.backgroundMode.isEnabled());
    console.log("background mode isActive" + this.backgroundMode.isActive());
    this.locationTracker.startTracking();
  }

  stop() {
    this.locationTracker.stopTracking();
  }

}
