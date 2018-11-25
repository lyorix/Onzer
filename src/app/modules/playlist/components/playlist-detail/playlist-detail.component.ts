import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlaylistInfo } from '../../model/playlist-info.model';

@Component({
  selector: 'ozr-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {

  @Input() playlistInfo: PlaylistInfo;

  tracksLimitMin = 0;
  tracksLimitMax = 30;

  constructor() { }

  ngOnInit() {
  }

  ////////////////////////////////////
  //    ACTIONS
  ////////////////////////////////////

  /**
   * Executes on playlist scroll down event
   */
  increaseTracksLimit(event: any) {
    this.tracksLimitMax += 30;
  }

}
