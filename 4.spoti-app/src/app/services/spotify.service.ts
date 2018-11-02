import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  baseUrl:string = "https://api.spotify.com/v1"
  authToken:string = 'Bearer BQBSc57RbxC5e-lT8ZPGIq6mGkT6K6Tfxmo-Zx8erscx50fN-Ulje6AtuerzwIh-lyXR1UVrhWXxGwX1shM';
  headers:HttpHeaders = new HttpHeaders({
    'Authorization': this.authToken
  });

  constructor( private http:HttpClient ) {
  }

  public getNewReleases(){
    return this.getQuery("/browse/new-releases").pipe(map((data:any) => data.albums.items));
  }

  public getArtists(term:string){
    return this.getQuery(`/search?q=${ term }&type=artist&limit=15`).pipe(map((data:any) => data.artists.items));
  }

  public getQuery(query:string){
    const url = this.baseUrl + query;
    return this.http.get( url, { headers: this.headers }) 
  }

}
