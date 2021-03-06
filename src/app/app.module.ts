import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage';


// Firebase Initial Config
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//Guards
import { AccessGuard } from './guards/access.guard';
import { SharedModule } from './shared/shared.module';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      AngularFireDatabaseModule,
      AngularFireModule.initializeApp(environment.firebase),
      SharedModule,
      FormsModule,
      HttpClientModule,
      AngularFirestoreModule,
      IonicStorageModule.forRoot({
        name: 'cinemApp',
        driverOrder: ['localstorage']
      })
    ],
  providers: [
    StatusBar,
    SplashScreen,
    AccessGuard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
