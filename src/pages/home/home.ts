import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { LoginPage} from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth,public userprovider:UsuarioProvider,public platform:Platform
    ,private fb: Facebook) {
 console.log('TEST inicio');
  }
  consolar(){
  console.log('TEST DE CONSOLA');
  }

  
    signInWithFacebook() {
      console.log('TEST DE CONSOLA');
      if (this.platform.is('cordova')) {
     this.fb.login(['email', 'public_profile']).then(res => {
       const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
       firebase.auth().signInWithCredential(facebookCredential).
       then(user =>{
             console.log(res);
           
             this.userprovider.cargaruser(
                     user.displayName,
                     user.email,
                     user.photoURL,user.phoneNumber,
                     user.uid,
                     'facebook'
               );
             this.navCtrl.push(LoginPage);

            }).catch(e=>console.log('error con el login'+ JSON.stringify(e)));
      });
      }else{
      this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
             console.log(res);
             let user = res.user;
             this.userprovider.cargaruser(
                     user.displayName,
                     user.email,
                     user.photoURL,user.phoneNumber,
                     user.uid,
                     'facebook'
               );
             this.navCtrl.push(LoginPage);

            });
      }
      


  }


}
