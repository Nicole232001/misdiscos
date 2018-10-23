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
import { Disc3imagenPage } from '../disc3imagen/disc3imagen';
import { Disc3nombrePage } from '../disc3nombre/disc3nombre';
import { Disc3albumPage } from '../disc3album/disc3album';
import { Disc3estrellasPage } from '../disc3estrellas/disc3estrellas';
import { Disc4imagenPage } from '../disc4imagen/disc4imagen';
import { Disc4nombrePage } from '../disc4nombre/disc4nombre';
import { Disc4albumPage } from '../disc4album/disc4album';
import { Disc4estrellasPage } from '../disc4estrellas/disc4estrellas';

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
imagenn3=Disc3imagenPage;
nombree3=Disc3nombrePage;
albumm3=Disc3albumPage;
estrellass3=Disc3estrellasPage;
imagenn4=Disc4imagenPage;
nombree4=Disc4nombrePage;
albumm4=Disc4albumPage;
estrellass4=Disc4estrellasPage;
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
imagen3(){
  this.navCtrl.push(this.imagenn3);
}
nombre3(){
  this.navCtrl.push(this.nombree3);
}
album3(){
  this.navCtrl.push(this.albumm3);
}
stars3(){
  this.navCtrl.push(this.estrellass3);
}
imagen4(){
  this.navCtrl.push(this.imagenn4);
}
nombre4(){
  this.navCtrl.push(this.nombree4);
}
album4(){
  this.navCtrl.push(this.albumm4);
}
stars4(){
  this.navCtrl.push(this.estrellass4);
}
}
