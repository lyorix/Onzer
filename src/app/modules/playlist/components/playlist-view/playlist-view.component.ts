import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlaylistInformationDataService} from '../../services/playlist-information-data.service';
import {PlaylistInfo} from '../../model/playlist-info.model';

@Component({
  selector: 'ozr-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.css']
})
export class PlaylistViewComponent implements OnInit {

  playlistInfo: PlaylistInfo;

  minimalHeader = false;

  constructor(private router: Router, private route: ActivatedRoute, private playlistInfoDataService: PlaylistInformationDataService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      this.playlistInfoDataService.getPlaylist(parseInt(map.get('id'), 10)).subscribe((res) => {
        this.playlistInfo = res;
      });
    });
  }

  ////////////////////////////////////
  //    ACTIONS
  ////////////////////////////////////

  /**
   * Opens the playlists screen
   */
  openPlaylists() {
    this.router.navigate(['/playlists']);
  }

  /**
   * Changes the playlist header display, if track list is scrolled or not
   * @param scrolled - true if track list has been scrolled, false otherwise
   */
  updatePlaylistHeader(scrolled: boolean) {
    this.minimalHeader = scrolled;
  }

}
