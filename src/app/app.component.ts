import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './spotify.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
      data : Array<object> = [];
        
     check : boolean = true;

  // Geting the Access Token
    token = window.location.hash    
    .substring(1)
    .split('&')
    .reduce((intial : any,item)=>{
         let parts=item.split('=')
         intial[parts[0]]=decodeURIComponent(parts[1]);
         return intial;
        },{});
        
    constructor (){
      //if token present make check fasle
     
      if(this.token.hasOwnProperty("access_token")){
        //storing token to localstorage
        localStorage.setItem('token', this.token.access_token);
              this.check = false;
       } 
     }

    ngOnInit():void{
          
    }
    
  
}
