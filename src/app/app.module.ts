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
import { Disc3albumPage } from '../pages/disc3album/disc3album';
import { Disc3estrellasPage } from '../pages/disc3estrellas/disc3estrellas';
import { Disc3imagenPage } from '../pages/disc3imagen/disc3imagen';
import { Disc3nombrePage } from '../pages/disc3nombre/disc3nombre';
import { Disc4albumPage } from '../pages/disc4album/disc4album';
import { Disc4estrellasPage } from '../pages/disc4estrellas/disc4estrellas';
import { Disc4imagenPage } from '../pages/disc4imagen/disc4imagen';
import { Disc4nombrePage } from '../pages/disc4nombre/disc4nombre';
import { Disc5albumPage } from '../pages/disc5album/disc5album';
import { Disc5estrellasPage } from '../pages/disc5estrellas/disc5estrellas';
import { Disc5imagenPage } from '../pages/disc5imagen/disc5imagen';
import { Disc5nombrePage } from '../pages/disc5nombre/disc5nombre';

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
    Disc3albumPage,
    Disc3estrellasPage,
    Disc3imagenPage,
    Disc3nombrePage,
    Disc4albumPage,
    Disc4estrellasPage,
    Disc4imagenPage,
    Disc4nombrePage,
    Disc5albumPage,
    Disc5estrellasPage,
    Disc5imagenPage,
    Disc5nombrePage,
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
    Disc3albumPage,
    Disc3estrellasPage,
    Disc3imagenPage,
    Disc3nombrePage,
    Disc4albumPage,
    Disc4estrellasPage,
    Disc4imagenPage,
    Disc4nombrePage,
    Disc5albumPage,
    Disc5estrellasPage,
    Disc5imagenPage,
    Disc5nombrePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
