import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistCardComponent } from './components/playlist-card/playlist-card.component';
import { PlaylistsHeaderComponent } from './components/playlists-header/playlists-header.component';
import { PlaylistsViewComponent } from './components/playlists-view/playlists-view.component';
import { PlaylistsContentComponent } from './components/playlists-content/playlists-content.component';
import { PlaylistsRoutingModule } from './playlists-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { UserPlaylistsDataService } from './services/user-playlists-data.service';

@NgModule({
  declarations: [PlaylistCardComponent, PlaylistsHeaderComponent, PlaylistsViewComponent, PlaylistsContentComponent],
  imports: [
    CommonModule, 
    PlaylistsRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserPlaylistsDataService
  ]
})
export class PlaylistsModule { }
