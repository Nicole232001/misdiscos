import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Disc1imagenPage } from '../disc1imagen/disc1imagen';
import { Disc1nombrePage } from '../disc1nombre/disc1nombre';
import { Disc1albumPage } from '../disc1album/disc1album';
import { Disc1estrellasPage } from '../disc1estrellas/disc1estrellas';
import { Disc2imagenPage } from '../disc2imagen/disc2imagen';
import { Disc2nombrePage } from '../disc2nombre/disc2nombre';
import { Disc2albumPage } from '../disc2album/disc2album';
import { Disc2albumPageModule } from '../disc2album/disc2album.module';
import { Disc2estrellasPage } from '../disc2estrellas/disc2estrellas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
imagen=Disc1imagenPage;
nombre=Disc1nombrePage;
album=Disc1albumPage;
estrellas=Disc1estrellasPage;
imagenn2=Disc2imagenPage;
nombree2=Disc2nombrePage;
albumm2=Disc2albumPage;
estrellass2=Disc2estrellasPage;
  constructor(public navCtrl: NavController) {

  }
imagenn(){
  this.navCtrl.push(this.imagen);
}
nombree(){
  this.navCtrl.push(this.nombre);
}
albumm(){
  this.navCtrl.push(this.album);
}
stars(){
  this.navCtrl.push(this.estrellas);
}
imagen2(){
  this.navCtrl.push(this.imagenn2);
}
nombre2(){
  this.navCtrl.push(this.nombree2);
}
album2(){
  this.navCtrl.push(this.albumm2);
}
stars2(){
  this.navCtrl.push(this.estrellass2);
}
}
