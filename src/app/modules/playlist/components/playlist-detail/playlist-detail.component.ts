import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlaylistInfo } from '../../model/playlist-info.model';

@Component({
  selector: 'ozr-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {

  @Input() playlistInfo: PlaylistInfo;

  limitMin = 0;
  limitMax = 30;

  constructor() { }

  ngOnInit() {
  }

  onScrollDown(event: any) {
    this.limitMax += 30;
  }

}
