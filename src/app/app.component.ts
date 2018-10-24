import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { TrackingPage } from '../pages/tracking/tracking';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = TrackingPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, AFD: AngularFireDatabase) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      AFD.list('/DeliveryBoyLocation/').set('sexy', 'shiva');

    });
  }
}
