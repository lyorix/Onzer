import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'playlists', loadChildren: './modules/playlists/playlists.module#PlaylistsModule'},
  {path: 'playlist/:id', loadChildren: './modules/playlist/playlist.module#PlaylistModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
