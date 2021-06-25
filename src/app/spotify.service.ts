import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
         

  constructor(private http: HttpClient) {}
      
  
     get headers() {
        return new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("token")}`});
      }
      
      // fecthing username and userimage
      getMe() {
        return this.http.get('https://api.spotify.com/v1/me', {
           headers: this.headers
             });
        }

     //fetching the albums
     getAlbums() {
      return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {
         headers: this.headers
           });
      }
     
      //fetching the track based on user search
      getSearch( term : string= 'justin'){
        return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=track`, {
         headers: this.headers
           });
      }

      //fetching the liked playlist of user
      getPlaylist(){
        return this.http.get('https://api.spotify.com/v1/me/playlists?offset=0&limit=20' , {
          headers: this.headers
        });
      }

      //fetching user recommendation 
      getRecommendation(){
        return this.http.get('https://api.spotify.com/v1/me/top/artists?limit=10' , {
          headers: this.headers
        });
      }

}
