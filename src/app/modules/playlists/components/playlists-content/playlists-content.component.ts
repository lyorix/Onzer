import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Playlist} from '../../model/playlist.model';

@Component({
  selector: 'ozr-playlists-content',
  templateUrl: './playlists-content.component.html',
  styleUrls: ['./playlists-content.component.css']
})
export class PlaylistsContentComponent implements OnInit {

  @Input() playlists: Array<Playlist>;

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
  onPlaylistSelect(playlist: Playlist) {
    this.playlistSelect.emit(playlist);
  }

}
