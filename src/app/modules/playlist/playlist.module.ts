import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistHeaderComponent } from './components/playlist-header/playlist-header.component';
import { PlaylistViewComponent } from './components/playlist-view/playlist-view.component';
import { PlaylistDetailComponent } from './components/playlist-detail/playlist-detail.component';
import { PlaylistDetailLineComponent } from './components/playlist-detail-line/playlist-detail-line.component';
import { PlaylistRoutingModule } from './playlist-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PlaylistInformationDataService } from './services/playlist-information-data.service';
import { TimeModule } from '../core/time/time.module';

@NgModule({
  declarations: [PlaylistHeaderComponent, PlaylistViewComponent, PlaylistDetailComponent, PlaylistDetailLineComponent],
  imports: [
    CommonModule, 
    PlaylistRoutingModule, 
    HttpClientModule,
    FormsModule,
    TimeModule
  ],
  providers: [
    PlaylistInformationDataService
  ]
})
export class PlaylistModule { }
