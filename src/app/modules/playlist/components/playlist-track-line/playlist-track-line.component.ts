import {Component, Input, OnInit} from '@angular/core';
import {Track} from '../../model/track.model';

@Component({
  selector: 'ozr-playlist-track-line',
  templateUrl: './playlist-track-line.component.html',
  styleUrls: ['./playlist-track-line.component.css']
})
export class PlaylistTrackLineComponent implements OnInit {

  @Input() track: Track;

  constructor() {
  }

  ngOnInit() {
  }

}
