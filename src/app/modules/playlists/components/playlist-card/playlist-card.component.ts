import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Playlist} from '../../model/playlist.model';

@Component({
  selector: 'ozr-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.css']
})
export class PlaylistCardComponent implements OnInit {

  @Input() playlist: Playlist;

  @Output() playlistSelect = new EventEmitter<Playlist>();

  constructor() {
  }

  ngOnInit() {
  }

  ////////////////////////////////////
  //    ACTIONS
  ////////////////////////////////////

  /**
   * On playlist selection
   * @param playlist - the selected playlist
   */
  onPlaylistSelect() {
    this.playlistSelect.emit(this.playlist);
  }

}
