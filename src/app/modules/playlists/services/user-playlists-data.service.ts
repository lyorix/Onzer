import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Playlist } from '../model/playlist.model';

@Injectable({
  providedIn: 'root'
})
export class UserPlaylistsDataService {

  private static readonly USER_PLAYLISTS_URL: string = '/deezer/user/{userId}/playlists';

  private cachedUserPlaylist: Array<Playlist>;

  constructor(private http: HttpClient) {
  }

  public getUserPlaylists(userId: number): Observable<Array<Playlist>> {
      if (this.cachedUserPlaylist) {
        return Observable.create((observer:any) => {
            observer.next(this.cachedUserPlaylist)
        });
      }
      else {
        return this.http.get(UserPlaylistsDataService.USER_PLAYLISTS_URL.replace('{userId}', '' + userId))
            .pipe(map(result => this.mapToPlaylists(result)))
            .pipe(catchError(this.handleError));
      }
  }

  private mapToPlaylists(playlistsData: any): Array<Playlist> {
      let playlists: Array<Playlist> = [];
      for (let playlistData of playlistsData.data) {
          let playlist: Playlist = {
            id: playlistData.id,
            title : playlistData.title,
            cover : playlistData.picture_medium
          }
          playlists.push(playlist);
      }
      this.cachedUserPlaylist = playlists;
      return playlists;
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
