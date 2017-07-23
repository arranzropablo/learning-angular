import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService, Character } from '../../services/characters.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  characters:Character[] = [];
  search:string;

  constructor( private activatedRoute:ActivatedRoute, private charactersService:CharactersService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.search = params['term'];
      this.characters = this.charactersService.searchChar(params['term']);
    });
  }

}
