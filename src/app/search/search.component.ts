import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

   userImage : string = '';
   userName : string = '';
   term : string = '';
   tracks : Array<any> = [];

  constructor(private spotify : SpotifyService) { }

  ngOnInit(): void {

    this.spotify.getMe().subscribe( (response: any) =>{
      this.userImage = response.images[0].url;
      this.userName = response.display_name;   
    })
  }

  onInput( event : any){
    this.term = event.target.value;
  }

  onSubmit( event : any){
    event.preventDefault();
    this.spotify.getSearch(this.term).subscribe((response : any)=>{
      this.tracks =response.tracks.items;
    })
  }

}



