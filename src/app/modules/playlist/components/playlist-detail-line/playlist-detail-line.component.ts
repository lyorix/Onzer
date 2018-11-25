import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../../model/track.model';

@Component({
  selector: 'ozr-playlist-detail-line',
  templateUrl: './playlist-detail-line.component.html',
  styleUrls: ['./playlist-detail-line.component.css']
})
export class PlaylistDetailLineComponent implements OnInit {

  @Input() track: Track;
  
  constructor() { }

  ngOnInit() {
  }

}
