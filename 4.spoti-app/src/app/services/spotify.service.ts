import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists:any[] = [];
  urlSearch:string = "https://api.spotify.com/v1/search"
  urlArtist:string = "https://api.spotify.com/v1/artists/"
  authToken:string = 'Bearer BQCoSRUiG21Yju5KEmr4Ic3QIXociApMCqRM-H1DkCQGdHzhMPiwDiqdQ9cDDFCmQQ7xk0EQw_Bgd15aUl_Tsg';

  constructor( private http:Http ) { }

  public getArtists(term:string){

    let headers = new Headers();
    headers.append('authorization', this.authToken)

    let query = `?q=${ term }&type=artist`;
    let url=this.urlSearch + query;

    return this.http.get( url, { headers } ).map( res => {
      this.artists=res.json().artists.items;
    });

  }

  public getArtist(id:string){

    let headers = new Headers();
    headers.append('authorization', this.authToken)

    let query = `${ id }`;
    let url=this.urlArtist + query;

    return this.http.get( url, { headers } ).map( res => {
      return res.json();
    });

  }

  public getTopTracks(id:string){

    let headers = new Headers();
    headers.append('authorization', this.authToken)

    let query = `${ id }/top-tracks?country=US`;
    let url=this.urlArtist + query;

    return this.http.get( url, { headers } ).map( res => {
      return res.json().tracks;
    });

  }

}
