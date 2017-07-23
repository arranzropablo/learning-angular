import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { APP_ROUTING } from "./app.routes";;

//Services
import { CharactersService } from './services/characters.service';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/character/character.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CharactersComponent,
    CharacterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    CharactersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
