import { Injectable, NgZone } from '@angular/core';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { AngularFireDatabase } from 'angularfire2/database';
import { BackgroundMode } from '@ionic-native/background-mode';
import 'rxjs/add/operator/filter';
@Injectable()
export class LocationTracker {

  public watch: any;
  public lat: number = 0;
  public lng: number = 0;
  //let frequency
  constructor(public zone: NgZone, public backgroundGeolocation: BackgroundGeolocation, public AFD: AngularFireDatabase,
    public geolocation: Geolocation, private backgroundMode: BackgroundMode) {
    this.backgroundMode.enable();
    console.log("background mode enabled" + this.backgroundMode.isEnabled);
    console.log("background mode isActive" + this.backgroundMode.isActive);
  }

  startTracking() {

    // Background Tracking

    let config = {
      desiredAccuracy: 0,
      stationaryRadius: 20,
      distanceFilter: 10,
      debug: true,
      interval: 20
    };

    this.backgroundGeolocation.configure(config).subscribe((location) => {
      console.log("hurray");
      console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

      this.AFD.list("/delivery_boy_watch_positions/")
        .set("delivery_boy_1", {
          "latitude": location.latitude,
          "longitude": location.longitude

        }).then((success) => {
          console.log("Delivery background positions Push Success ", success);
        }, (error) => {
          console.log("Delivery background positions Push Error ", error)
        });

      // Run update inside of Angular's zone
      this.zone.run(() => {
        this.lat = location.latitude;
        this.lng = location.longitude;
      });

    }, (err) => {

      console.log(err);

    });

    // Turn ON the background-geolocation system.
    this.backgroundGeolocation.start();


    // Foreground Tracking

    let options = {
      frequency: 3000,
      enableHighAccuracy: true
    };

    this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {

      console.log(position);
      this.AFD.list("/delivery_boy_watch_positions/")
        .set("delivery_boy_1", {
          "latitude": position.coords.latitude,
          "longitude": position.coords.longitude

        }).then((success) => {
          console.log("Delivery foreground positions Push Success ", success);
        }, (error) => {
          console.log("Delivery foreground positions Push Error ", error)
        });


      // Run update inside of Angular's zone
      this.zone.run(() => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });

    });

  }

  stopTracking() {

    console.log('stopTracking');

    this.backgroundGeolocation.finish();
    this.watch.unsubscribe();

  }

}