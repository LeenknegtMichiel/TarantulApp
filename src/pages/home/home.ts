import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { CreateNewPage } from '../create-new/create-new';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  details(){
    this.navCtrl.push(DetailsPage);
  }
  CreateNew(){
    this.navCtrl.push(CreateNewPage);
  }
  menu(){
    
  }

}
