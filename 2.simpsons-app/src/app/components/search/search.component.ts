import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService, Character } from '../../services/characters.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  characters:Character[] = [];
  search:string;

  constructor( private activatedRoute:ActivatedRoute, private charactersService:CharactersService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.search = params['term'];
      this.characters = this.charactersService.searchChar(params['term']);
    });
  }

  //Estoy duplicando el codigo de characters.component.ts
  getCharacter(index:number){
    this.router.navigate(['/character', index]);
  }

}
