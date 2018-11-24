import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../model/playlist.model';
import { UserPlaylistsDataService } from '../../services/user-playlists-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ozr-playlists-view',
  templateUrl: './playlists-view.component.html',
  styleUrls: ['./playlists-view.component.css']
})
export class PlaylistsViewComponent implements OnInit {

  playlists : Array<Playlist>;

  constructor(private userPlaylistsDataService : UserPlaylistsDataService,
    private router: Router) { }

  ngOnInit() {
    this.userPlaylistsDataService.getUserPlaylists(5).subscribe((res) =>{
      this.playlists = res;
    });
  }

  openPlaylist(playlist: Playlist) {
   this.router.navigate(['/playlist/' + playlist.id]);
  }

}
