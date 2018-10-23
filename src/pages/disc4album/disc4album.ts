import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Disc4albumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disc4album',
  templateUrl: 'disc4album.html',
})
export class Disc4albumPage {
  ck=["Eraser", "Castle on the hill", "Dive", "Shape on you", "Perfect", "Galway girl", "Happier", "New man", "Hearts don´t break around here", "What do I know", "How would you feel" , "Supermarket flowers", "Barcelona", "Bibia be ye ye", "Nancy mulligan", "Save myself"];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Disc4albumPage');
  }

}
