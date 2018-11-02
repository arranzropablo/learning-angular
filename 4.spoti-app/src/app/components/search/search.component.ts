import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  term:string = "";
  artists:any[] = [];
  loading:boolean;

  constructor( private spotifyService:SpotifyService ) { }

  ngOnInit() {

  }

  searchArtist(){
    if(this.term === ""){

      this.loading = false;
      this.artists = [];

    } else {

      this.loading = true;
      this.spotifyService.getArtists(this.term).subscribe((data:any) => {
        this.artists = data;
        this.loading = false;
      });

    }
  }

}
