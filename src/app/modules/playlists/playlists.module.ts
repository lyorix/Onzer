import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaylistCardComponent} from './components/playlist-card/playlist-card.component';
import {PlaylistsViewComponent} from './components/playlists-view/playlists-view.component';
import {PlaylistsContentComponent} from './components/playlists-content/playlists-content.component';
import {PlaylistsRoutingModule} from './playlists-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserPlaylistsDataService} from './services/user-playlists-data.service';
import {LoaderModule} from '../core/loader/loader.module';
import {OnzerCommonModule} from '../common/onzer-common.module';

@NgModule({
  declarations: [PlaylistCardComponent, PlaylistsViewComponent, PlaylistsContentComponent],
  imports: [
    CommonModule,
    OnzerCommonModule,
    PlaylistsRoutingModule,
    HttpClientModule,
    FormsModule,
    LoaderModule
  ],
  providers: [
    UserPlaylistsDataService
  ]
})
export class PlaylistsModule {
}
