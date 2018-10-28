import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  term:string = "";
  artists:any[] = [];

  constructor( private spotifyService:SpotifyService ) { }

  ngOnInit() {

  }

  searchArtist(){
    this.spotifyService.getArtists(this.term).subscribe((data:any) => {
      this.artists = data;
    });
  }

}
