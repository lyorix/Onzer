import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ozr-playlist-header',
  templateUrl: './playlist-header.component.html',
  styleUrls: ['./playlist-header.component.css']
})
export class PlaylistHeaderComponent implements OnInit {

  @Output() backClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  back() {
    this.backClicked.emit();
  }

}
