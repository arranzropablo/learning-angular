import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  urlSearch:string = "https://api.spotify.com/v1/search"
  urlArtist:string = "https://api.spotify.com/v1/artists/"
  authToken:string = 'Bearer BQCOgGcLPZP-jHyKFSKahDLnQKe1UTn0QZ1DdJDYCKpaH13zAtrCwKAqlyvo70_e2mv0KVNNdN9DMeQPBTI';
  headers:HttpHeaders = new HttpHeaders({
    'Authorization': this.authToken
  });

  constructor( private http:HttpClient ) {
  }

  public getNewReleases(){
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers: this.headers })
                    .pipe(map((data:any) => data.albums.items));
  }

  public getArtists(term:string){

    let query = `?q=${ term }&type=artist&limit=15`;
    let url=this.urlSearch + query;

    return this.http.get( url, { headers: this.headers })
                    .pipe(map((data:any) => data.artists.items));
  }

  public getArtist(id:string){

    let headers = new Headers();
    headers.append('authorization', this.authToken)

    let query = `${ id }`;
    let url=this.urlArtist + query;

    return this.http.get( url, { headers: this.headers } );

  }

  public getTopTracks(id:string){

    let headers = new Headers();
    headers.append('authorization', this.authToken)

    let query = `${ id }/top-tracks?country=US`;
    let url=this.urlArtist + query;

    return this.http.get( url, { headers: this.headers } );

  }

}
