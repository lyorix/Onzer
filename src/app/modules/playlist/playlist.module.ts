import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaylistHeaderComponent} from './components/playlist-header/playlist-header.component';
import {PlaylistViewComponent} from './components/playlist-view/playlist-view.component';
import {PlaylistContentComponent} from './components/playlist-content/playlist-content.component';
import {PlaylistTrackLineComponent} from './components/playlist-track-line/playlist-track-line.component';
import {PlaylistRoutingModule} from './playlist-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {PlaylistInformationDataService} from './services/playlist-information-data.service';
import {TimeModule} from '../core/time/time.module';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {LoaderModule} from '../core/loader/loader.module';
import {OnzerCommonModule} from '../common/onzer-common.module';

@NgModule({
  declarations: [PlaylistHeaderComponent, PlaylistViewComponent, PlaylistContentComponent, PlaylistTrackLineComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    HttpClientModule,
    FormsModule,
    TimeModule,
    LoaderModule,
    OnzerCommonModule,
    InfiniteScrollModule
  ],
  providers: [
    PlaylistInformationDataService
  ]
})
export class PlaylistModule {
}
