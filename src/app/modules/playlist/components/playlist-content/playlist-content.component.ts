import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlaylistInfo} from '../../model/playlist-info.model';

@Component({
  selector: 'ozr-playlist-content',
  templateUrl: './playlist-content.component.html',
  styleUrls: ['./playlist-content.component.css']
})
export class PlaylistContentComponent implements OnInit {

  @Input() playlistInfo: PlaylistInfo;

  @Output() scrolled = new EventEmitter<boolean>();

  tracksLimitMin = 0;
  tracksLimitMax = 30;

  constructor() {
  }

  ngOnInit() {
  }

  ////////////////////////////////////
  //    ACTIONS
  ////////////////////////////////////

  /**
   * Increase the maximum number of tracks to be displayed
   */
  increaseTracksLimit(event: any) {
    this.tracksLimitMax += 30;
  }

  /**
   * On scroll event
   */
  onScroll(event: any) {
    if (event.target.scrollTop >= 100) {
      this.scrolled.emit(true);
    } else {
      this.scrolled.emit(false);
    }
  }

}
