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

  private cachedUserPlaylist = new Map<number, Array<Playlist>>();

  constructor(private http: HttpClient) {
  }

  /**
   * Retrieves all the playlists for a given user
   * @param userId - the user identifier
   */
  public getUserPlaylists(userId: number): Observable<Array<Playlist>> {
      if (this.cachedUserPlaylist.get(userId)) {
        return Observable.create((observer:any) => {
            observer.next(this.cachedUserPlaylist.get(userId));
        });
      }
      else {
        return this.http.get(UserPlaylistsDataService.USER_PLAYLISTS_URL
            .replace('{userId}', '' + userId))
            .pipe(map((result) => { 
                const playlists = this.mapToPlaylists(result);
                this.cachedUserPlaylist.set(userId, playlists);
                return playlists;
            }))
            .pipe(catchError(this.handleError));
      }
  }

  private mapToPlaylists(playlistsData: any): Array<Playlist> {
      let playlists: Array<Playlist> = [];
      if (playlistsData.data) {
        for (let playlistData of playlistsData.data) {
            let playlist: Playlist = {
                id: playlistData.id,
                title : playlistData.title,
                cover : playlistData.picture_medium
            }
            playlists.push(playlist);
        }
      }
      return playlists;
  }

  private handleError(error: any) {
      // In a real world app, we might use a remote logging infrastructure
      let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
  }

}
