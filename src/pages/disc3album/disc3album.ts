import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Disc3albumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disc3album',
  templateUrl: 'disc3album.html',
})
export class Disc3albumPage {
  ack=["Maps", "Animals", "It was always you", "Unkiss me", "Sugar", "Leaving california", "In your pocket", "New love", "Coming back to you", "Feelings", "My heart is open", "This summer’s gonna hurt like…", "Shoot love", "Sex and candy", "Lost stars"];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Disc3albumPage');
  }

}
