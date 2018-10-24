import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import * as firebase from 'firebase';
import { TrackingPage } from '../pages/tracking/tracking';
import { HomePage } from '../pages/home/home';
import { LocationTracker } from '../providers/location-tracker';
import { AngularFireModule } from 'angularfire2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';

import { BackgroundMode } from '@ionic-native/background-mode';

import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
var config = {
  apiKey: "AIzaSyA18JPg3AKvecrd7_JFQfNinUc40e9huyQ",
  authDomain: "gmprod-2018.firebaseapp.com",
  databaseURL: "https://gmprod-2018.firebaseio.com",
  projectId: "gmprod-2018",
  storageBucket: "gmprod-2018.appspot.com",
  messagingSenderId: "303861404647"
};
firebase.initializeApp(config);
@NgModule({
  declarations: [
    MyApp, TrackingPage,

    HomePage,

  ],
  imports: [
    BrowserModule, AngularFireDatabaseModule, AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, TrackingPage,

    HomePage,

  ],
  providers: [BackgroundMode, BackgroundGeolocation,
    StatusBar, LocationTracker, Geolocation,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
