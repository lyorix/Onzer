import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { PlaylistInfo } from '../../model/playlist-info.model';

@Component({
  selector: 'ozr-playlist-header',
  templateUrl: './playlist-header.component.html',
  styleUrls: ['./playlist-header.component.css']
})
export class PlaylistHeaderComponent implements OnInit {

  @Input() playlistInfo: PlaylistInfo;

  @Output() backClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  ////////////////////////////////////
  //    ACTIONS
  ////////////////////////////////////

  /**
   * Performs back request
   */
  back() {
    this.backClicked.emit();
  }

}
