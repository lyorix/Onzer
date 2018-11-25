import { Component, OnInit, Input } from '@angular/core';
import { PlaylistInfo } from 'src/app/modules/playlist/model/playlist-info.model';

@Component({
  selector: 'ozr-playlists-header',
  templateUrl: './playlists-header.component.html',
  styleUrls: ['./playlists-header.component.css']
})
export class PlaylistsHeaderComponent implements OnInit {

  @Input() playlistInfo: PlaylistInfo;
  
  constructor() { }

  ngOnInit() {
  }

}
