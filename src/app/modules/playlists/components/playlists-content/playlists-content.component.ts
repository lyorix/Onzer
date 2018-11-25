import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Playlist } from '../../model/playlist.model';

@Component({
  selector: 'ozr-playlists-content',
  templateUrl: './playlists-content.component.html',
  styleUrls: ['./playlists-content.component.css']
})
export class PlaylistsContentComponent implements OnInit {

  @Input() playlists: Array<Playlist>;

  @Output() playlistSelected = new EventEmitter<Playlist>();

  constructor() { }

  ngOnInit() {
  }

  ////////////////////////////////////
  //    ACTIONS
  ////////////////////////////////////

  /**
   * Selects a given playlist
   * @param playlist - the selected playlist
   */
  selectPlaylist(playlist: Playlist) {
    this.playlistSelected.emit(playlist);
  }

}
