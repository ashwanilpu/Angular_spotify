import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  authEndpoint="https://accounts.spotify.com/authorize";

  redirectUri="https://angularspotify.netlify.app/";
 
  clientId="f01abf236ff84598bb5ab78e31e11b4e";
 
 //The permission that user allow to acess
  scopes=[
     "user-read-currently-playing",
     "user-read-recently-played",
     "user-read-playback-state",
     "user-top-read",
     "user-modify-playback-state",
     "streaming",
     "user-read-email",
     "user-read-private",
     "user-library-read",
     "user-library-modify",
     "playlist-read-private",
 ];
 
   loginUrl = `${this.authEndpoint}?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=${this.scopes.join("%20")}&response_type=token&show_dialog=true`;



}
