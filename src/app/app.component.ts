import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InitPage } from '../pages/init/init';

// DEV STUFF
import {isDevMode} from "@angular/core";

import * as devUtils from 'mobilecaddy-utils/devUtils';
import * as _ from 'underscore';

if (isDevMode()) {
  window['devUtils'] = devUtils;
  window['_'] = _;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = InitPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
