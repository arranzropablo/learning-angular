import { Component, OnInit } from '@angular/core';
import { CharactersService, Character } from '../../services/characters.service';
  import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {

  characters:Character[] = [];

  constructor(private charService:CharactersService,
              private router:Router) { }

  ngOnInit() {
    this.characters = this.charService.getCharacters();
  }

  getCharacter(index:number){
    this.router.navigate(['/character', index]);
  }

}
