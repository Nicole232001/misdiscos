import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Disc1imagenPage } from '../pages/disc1imagen/disc1imagen';
import { Disc1nombrePage } from '../pages/disc1nombre/disc1nombre';
import { Disc1estrellasPage } from '../pages/disc1estrellas/disc1estrellas';
import { Disc1albumPage } from '../pages/disc1album/disc1album';
import { Disc2albumPage } from '../pages/disc2album/disc2album';
import { Disc2estrellasPage } from '../pages/disc2estrellas/disc2estrellas';
import { Disc2imagenPage } from '../pages/disc2imagen/disc2imagen';
import { Disc2nombrePage } from '../pages/disc2nombre/disc2nombre';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Disc1imagenPage,
    Disc1nombrePage,
    Disc1albumPage,
    Disc1estrellasPage,
    Disc2albumPage,
    Disc2estrellasPage,
    Disc2imagenPage,
    Disc2nombrePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Disc1imagenPage,
    Disc1nombrePage,
    Disc1albumPage,
    Disc1estrellasPage,
    Disc2albumPage,
    Disc2estrellasPage,
    Disc2imagenPage,
    Disc2nombrePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
