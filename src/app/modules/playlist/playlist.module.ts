import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistHeaderComponent } from './components/playlist-header/playlist-header.component';
import { PlaylistViewComponent } from './components/playlist-view/playlist-view.component';
import { PlaylistDetailComponent } from './components/playlist-detail/playlist-detail.component';
import { PlaylistDetailLineComponent } from './components/playlist-detail-line/playlist-detail-line.component';
import { PlaylistRoutingModule } from './playlist-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PlaylistHeaderComponent, PlaylistViewComponent, PlaylistDetailComponent, PlaylistDetailLineComponent],
  imports: [
    CommonModule, 
    PlaylistRoutingModule, 
    HttpClientModule,
    FormsModule
  ]
})
export class PlaylistModule { }
