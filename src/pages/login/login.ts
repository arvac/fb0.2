import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider,Credenciales } from '../../providers/usuario/usuario';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user : Credenciales={};
  constructor(public navCtrl: NavController, public navParams: NavParams,public userprovider:UsuarioProvider) {
 console.log(this.userprovider.usuario);
 this.user=this.userprovider.usuario;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
