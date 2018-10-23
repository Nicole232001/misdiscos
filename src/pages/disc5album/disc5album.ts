import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Disc5albumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disc5album',
  templateUrl: 'disc5album.html',
})
export class Disc5albumPage {
  ka=["Stayin’ alive", "How deep is your love", "Night fever", "More than a woman", " If I can't have you" , "A fifth of beethoven", "More than a woman", "Manhattan skyline", "Calypso breakdown", "Night on disco mountain", "Open sesame", "Jive talkin", "You should be dancing", "boogie shoes", "Salsation", "K-jee" ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Disc5albumPage');
  }

}
