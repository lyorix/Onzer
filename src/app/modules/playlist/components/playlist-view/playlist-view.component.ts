import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { PlaylistInformationDataService } from '../../services/playlist-information-data.service';
import { PlaylistInfo } from '../../model/playlist-info.model';

@Component({
  selector: 'ozr-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.css']
})
export class PlaylistViewComponent implements OnInit {

  playlistInfo: PlaylistInfo;

  constructor(private router: Router, private route: ActivatedRoute, private playlistInfoDataService: PlaylistInformationDataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
        console.log('route params: ' + JSON.stringify(map));
        this.playlistInfoDataService.getPlaylist(parseInt(map.get('id'))).subscribe((res) => {
          this.playlistInfo = res;
        });
    });
  }

  openPlaylists() {
    this.router.navigate(['/playlists']);
   }

}
