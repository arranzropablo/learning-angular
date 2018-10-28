import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  artist:any;
  topTracks:any[];

  constructor(private activatedRoute:ActivatedRoute, private spotifyService:SpotifyService) { }

  ngOnInit() {
    // this.activatedRoute.params
    //   .map( param => param['id'])
    //   .subscribe( id => {
    //     this.spotifyService.getArtist(id).subscribe(param =>{
    //       this.artist = param;
    //     });
    //     this.spotifyService.getTopTracks(id).subscribe(param =>{
    //       // this.topTracks = param;
    //     });
    //   });
  }

}
