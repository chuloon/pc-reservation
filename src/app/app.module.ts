import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from './grid/grid.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCB2R8UkCsGmadHuMkJSGXG-MmfTSmcGqg",
  authDomain: "pc-reservation.firebaseapp.com",
  databaseURL: "https://pc-reservation.firebaseio.com",
  projectId: "pc-reservation",
  storageBucket: "pc-reservation.appspot.com",
  messagingSenderId: "218545938386",
  appId: "1:218545938386:web:8e0f81e2d4a5dc5425720b"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
