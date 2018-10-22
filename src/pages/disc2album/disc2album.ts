import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Disc2albumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disc2album',
  templateUrl: 'disc2album.html',
})
export class Disc2albumPage {
  track=["In my blood", "Nervous", "Lost in japan", "Where were you in the morning", "Like to be you", "Fallin’ all in you", "Particular taste", "Why", "Because I had you", "Queen", "Youth", "Mutual", "Perfectly wrong", "When you are’re ready"];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Disc2albumPage');
  }

}
