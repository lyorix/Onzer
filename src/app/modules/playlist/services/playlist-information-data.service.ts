import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { PlaylistInfo } from '../model/playlist-info.model';
import { Track } from '../model/track.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistInformationDataService {

  private static readonly PLAYLIST_INFO_URL: string = '/deezer/playlist/{playlistId}';

  constructor(private http: HttpClient) {
  }

  public getPlaylist(playlistId: number): Observable<PlaylistInfo> {
      return this.http.get(PlaylistInformationDataService.PLAYLIST_INFO_URL.replace('{playlistId}', '' + playlistId))
          .pipe(map(result => this.mapToPlaylist(result)))
          .pipe(catchError(this.handleError));
  }

  private mapToPlaylist(playlistData: any): PlaylistInfo {
      const playlist: PlaylistInfo = {
        title: playlistData.title,
        duration: playlistData.duration * 1000,
        author: playlistData.creator.name,
        cover: playlistData.picture
      };
      if (playlistData.tracks) {
        playlist.tracks = new Array<Track>();
        playlistData.tracks.data.forEach((element: any) => {
          const track: Track = {
            title: element.title,
            duration: element.duration * 1000,
            artist: element.artist.name
          };
          playlist.tracks.push(track);
        });
      }
      return playlist;
  }

  private handleError(error: any) {
      // In a real world app, we might use a remote logging infrastructure
      // We'd also dig deeper into the error to get a better message
      let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
  }

}
