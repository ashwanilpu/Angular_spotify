import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

   playlists: Array<any> = []

  constructor(private spotify : SpotifyService) {
    this.spotify.getPlaylist().subscribe(( response: any)=>{
      this.playlists = response.items;
       });  
   }

  ngOnInit(): void {
  
       
  }

}
