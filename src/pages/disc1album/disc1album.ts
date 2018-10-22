import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { writeToNodes } from 'ionic-angular/umd/components/virtual-scroll/virtual-util';

/**
 * Generated class for the Disc1albumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disc1album',
  templateUrl: 'disc1album.html',
})
export class Disc1albumPage {
  track=["Mark my words", "I'll show you", "What do you mean", "Sorry", "Love yourself", "Company", "No pressure", "No sense", "The feeling", "Life is worth living", "Where are ü now", "Children", "Purpose", "Been you", "Get used to it", "We are", "trust", "all in it"];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Disc1albumPage');
  }

}
