import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { DesiresService } from './services/desires.service';
import { PlaceholderPipe } from './pipes/placeholder.pipe';
import { PendingPipe } from './pipes/pending.pipe';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PendingComponent } from '../pages/pending/pending.component';
import { DoneComponent } from '../pages/done/done.component';
import { AddComponent } from '../pages/add/add.component';
import { DetailComponent } from '../pages/detail/detail.component';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendingComponent,
    DoneComponent,
    AddComponent,
    PlaceholderPipe,
    PendingPipe,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendingComponent,
    TabsPage,
    DoneComponent,
    AddComponent,
    DetailComponent
  ],
  providers: [
    DesiresService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
