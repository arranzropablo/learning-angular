import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { NoimagePipe } from './pipes/noimage.pipe';
import { SafeURLPipe } from './pipes/safeURL.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';

import { APP_ROUTES } from './app.routes';
import { LoadingSpinnerComponent } from './components/shared/loading-spinner/loading-spinner.component';
import { ArtistComponent } from './components/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    NoimagePipe,
    SafeURLPipe,
    ArtistCardComponent,
    LoadingSpinnerComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
