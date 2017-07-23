import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
})
export class CharacterComponent {

  character:any;

  constructor( private activatedRoute:ActivatedRoute,
               private charactersService:CharactersService,
               private router:Router) {

    this.activatedRoute.params.subscribe( params => {
      this.character = this.charactersService.getChar(params['id']);
    })
  }

  public backToCharacters(){
    this.router.navigate(['/characters']);
  }

  public isMarvel(){
    return this.character.company === "Marvel";
  }

}
