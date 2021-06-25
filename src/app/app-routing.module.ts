import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LikeComponent } from './like/like.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
   {path: '' , component:HomeComponent},
   { path: 'like' , component:LikeComponent},
   { path: 'search' , component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
