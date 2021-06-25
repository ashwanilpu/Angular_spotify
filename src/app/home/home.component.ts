import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
   albums : Array<any> = [];
   topArtist : Array<any> = [];
   
  constructor(private spotify : SpotifyService) { 
    this.spotify.getAlbums().subscribe((response : any)=>{
      this.albums = response.albums.items;
    })

     this.spotify.getRecommendation().subscribe((response : any)=>{
        this.topArtist = response.items
     })

  }

  ngOnInit(): void {}
  

}
