import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  private artist:any = {};
  private loading:boolean = true;
  private tracks:any[] = [];

  constructor(private activatedRoute:ActivatedRoute, private spotifyService:SpotifyService) { 
    this.activatedRoute.params.subscribe(data => {
      this.getArtist(data.id);
      this.getTopTracks(data.id);
    })
  }

  getArtist(id:string){
    this.spotifyService.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopTracks(id:string){
    this.spotifyService.getTopTracks(id).subscribe(tracks => {
      this.tracks = tracks;
      console.log(tracks);
    });
  }

}
