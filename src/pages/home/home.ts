import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Disc1imagenPage } from '../disc1imagen/disc1imagen';
import { Disc1nombrePage } from '../disc1nombre/disc1nombre';
import { Disc1albumPage } from '../disc1album/disc1album';
import { Disc1estrellasPage } from '../disc1estrellas/disc1estrellas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
imagen=Disc1imagenPage;
nombre=Disc1nombrePage;
album=Disc1albumPage;
estrellas=Disc1estrellasPage;
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
}
