webpackJsonp([0],{

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 214;

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_location_tracker__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_background_mode__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrackingPage = /** @class */ (function () {
    function TrackingPage(navCtrl, locationTracker, backgroundMode) {
        this.navCtrl = navCtrl;
        this.locationTracker = locationTracker;
        this.backgroundMode = backgroundMode;
    }
    TrackingPage.prototype.start = function () {
        this.backgroundMode.enable();
        console.log("background mode enabled" + this.backgroundMode.isEnabled());
        console.log("background mode isActive" + this.backgroundMode.isActive());
        this.locationTracker.startTracking();
    };
    TrackingPage.prototype.stop = function () {
        this.locationTracker.stopTracking();
    };
    TrackingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tracking',template:/*ion-inline-start:"/Users/avinash/Desktop/DeliveryOctober/FirebaseApp copy/src/pages/tracking/tracking.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n      Location Tracker\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3>Current Latitude: {{locationTracker.lat}}</h3>\n  <h3>Current Longitude: {{locationTracker.lng}}</h3>\n  <button ion-button full primary (click)="start()">Start Tracking</button>\n  <button ion-button full primary (click)="stop()">Stop Tracking</button>\n</ion-content>'/*ion-inline-end:"/Users/avinash/Desktop/DeliveryOctober/FirebaseApp copy/src/pages/tracking/tracking.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_location_tracker__["a" /* LocationTracker */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_background_mode__["a" /* BackgroundMode */]])
    ], TrackingPage);
    return TrackingPage;
}());

//# sourceMappingURL=tracking.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTracker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_mode__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LocationTracker = /** @class */ (function () {
    //let frequency
    function LocationTracker(zone, backgroundGeolocation, AFD, geolocation, backgroundMode) {
        this.zone = zone;
        this.backgroundGeolocation = backgroundGeolocation;
        this.AFD = AFD;
        this.geolocation = geolocation;
        this.backgroundMode = backgroundMode;
        this.lat = 0;
        this.lng = 0;
        this.backgroundMode.enable();
        console.log("background mode enabled" + this.backgroundMode.isEnabled);
        console.log("background mode isActive" + this.backgroundMode.isActive);
    }
    LocationTracker.prototype.startTracking = function () {
        // Background Tracking
        var _this = this;
        var config = {
            desiredAccuracy: 0,
            stationaryRadius: 20,
            distanceFilter: 10,
            debug: true,
            interval: 20
        };
        this.backgroundGeolocation.configure(config).subscribe(function (location) {
            console.log("hurray");
            console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
            _this.AFD.list("/delivery_boy_watch_positions/")
                .set("delivery_boy_1", {
                "latitude": location.latitude,
                "longitude": location.longitude
            }).then(function (success) {
                console.log("Delivery background positions Push Success ", success);
                // this.loading.dismiss();
                //this.navCtrl.setRoot(TabsPage)
                // this.storage.set('device_token', this.MerchantDeviceToken);
                //this.navCtrl.setRoot(HomePage);
            }, function (error) {
                console.log("Delivery background positions Push Error ", error);
            });
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                _this.lat = location.latitude;
                _this.lng = location.longitude;
            });
        }, function (err) {
            console.log(err);
        });
        // Turn ON the background-geolocation system.
        this.backgroundGeolocation.start();
        // Foreground Tracking
        var options = {
            frequency: 3000,
            enableHighAccuracy: true
        };
        this.watch = this.geolocation.watchPosition(options).filter(function (p) { return p.code === undefined; }).subscribe(function (position) {
            console.log(position);
            _this.AFD.list("/delivery_boy_watch_positions/")
                .set("delivery_boy_1", {
                "latitude": position.coords.latitude,
                "longitude": position.coords.longitude
            }).then(function (success) {
                console.log("Delivery foreground positions Push Success ", success);
                // this.loading.dismiss();
                //this.navCtrl.setRoot(TabsPage)
                // this.storage.set('device_token', this.MerchantDeviceToken);
                //this.navCtrl.setRoot(HomePage);
            }, function (error) {
                console.log("Delivery foreground positions Push Error ", error);
            });
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        });
    };
    LocationTracker.prototype.stopTracking = function () {
        console.log('stopTracking');
        this.backgroundGeolocation.finish();
        this.watch.unsubscribe();
    };
    LocationTracker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_mode__["a" /* BackgroundMode */]])
    ], LocationTracker);
    return LocationTracker;
}());

//# sourceMappingURL=location-tracker.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(369);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tracking_tracking__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_location_tracker__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_background_mode__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_background_geolocation__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var config = {
    apiKey: "AIzaSyA18JPg3AKvecrd7_JFQfNinUc40e9huyQ",
    authDomain: "gmprod-2018.firebaseapp.com",
    databaseURL: "https://gmprod-2018.firebaseio.com",
    projectId: "gmprod-2018",
    storageBucket: "gmprod-2018.appspot.com",
    messagingSenderId: "303861404647"
};
__WEBPACK_IMPORTED_MODULE_4_firebase__["initializeApp"](config);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_5__pages_tracking_tracking__["a" /* TrackingPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["AngularFireDatabaseModule"], __WEBPACK_IMPORTED_MODULE_8_angularfire2__["AngularFireModule"].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_5__pages_tracking_tracking__["a" /* TrackingPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_7__providers_location_tracker__["a" /* LocationTracker */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tracking_tracking__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, AFD) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tracking_tracking__["a" /* TrackingPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            AFD.list('/DeliveryBoyLocation/').set('sexy', 'shiva');
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/avinash/Desktop/DeliveryOctober/FirebaseApp copy/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n<ion-buttons end>\n    <button ion-button icon-only>\n        <ion-icon name="add"></ion-icon>\n    </button>\n</ion-buttons>'/*ion-inline-end:"/Users/avinash/Desktop/DeliveryOctober/FirebaseApp copy/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/avinash/Desktop/DeliveryOctober/FirebaseApp copy/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/avinash/Desktop/DeliveryOctober/FirebaseApp copy/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[364]);
//# sourceMappingURL=main.js.map