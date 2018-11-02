import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
})
export class ArtistCardComponent implements OnInit {

  @Input() items:any[] = [];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  showArtist(item:any){
    let id:Number = item.type === "artist" ? item.id : item.artists[0].id;
    this.router.navigate(["/artist", id]);
  }

}
