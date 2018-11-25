import { Component, OnInit, Input } from '@angular/core';
import { PlaylistInfo } from '../../model/playlist-info.model';
import { Track } from '../../model/track.model';

@Component({
  selector: 'ozr-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {

  @Input() tracks: Array<Track>;

  constructor() { }

  ngOnInit() {
  }

}
