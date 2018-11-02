import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  baseUrl:string = "https://api.spotify.com/v1"
  authToken:string = 'Bearer BQAfSmfwPH6jaJKLZNb6oUvZ7Cu-h17Os4RUWPuC221zGOhpNH7qetUN_Oo3LoWrhtVz_-kK8hksNZmYLrQ';
  headers:HttpHeaders = new HttpHeaders({
    'Authorization': this.authToken
  });

  constructor( private http:HttpClient ) {
  }

  public getNewReleases(){
    return this.getQuery("/browse/new-releases").pipe(map((data:any) => data.albums.items));
  }

  public getArtists(term:string){
    return this.getQuery(`/search?q=${term}&type=artist&limit=15`).pipe(map((data:any) => data.artists.items));
  }

  public getArtist(id:string){
    return this.getQuery(`/artists/${id}`);
  }

  public getTopTracks(id:string){
    return this.getQuery(`/artists/${id}/top-tracks?country=es`).pipe(map((data:any) => data.tracks));
  }

  public getQuery(query:string){
    const url = this.baseUrl + query;
    return this.http.get( url, { headers: this.headers }) 
  }

}
