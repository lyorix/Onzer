import {Component, Input, OnInit} from '@angular/core';
import {PlaylistInfo} from '../../model/playlist-info.model';

@Component({
  selector: 'ozr-playlist-header',
  templateUrl: './playlist-header.component.html',
  styleUrls: ['./playlist-header.component.css']
})
export class PlaylistHeaderComponent implements OnInit {

  @Input() playlistInfo: PlaylistInfo;

  @Input() minimal: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
