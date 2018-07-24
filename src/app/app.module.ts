import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage} from '../pages/login/login';
//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UsuarioProvider } from '../providers/usuario/usuario';
//plugin
import { Facebook } from '@ionic-native/facebook';

export const firebaseConfig = {
    apiKey: "AIzaSyDtGO-nUEaAWYyhZH18f7zmHYSsVZKOhvg",
    authDomain: "loginfacebook-a2c1b.firebaseapp.com",
    databaseURL: "https://loginfacebook-a2c1b.firebaseio.com",
    projectId: "loginfacebook-a2c1b",
    storageBucket: "loginfacebook-a2c1b.appspot.com",
    messagingSenderId: "1019035659429"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,Facebook
  ]
})
export class AppModule {}
