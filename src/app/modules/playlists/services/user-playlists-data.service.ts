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

  constructor(private http: HttpClient) {
  }

  /**
   * Get the patients list for a given ward
   * @param wardId - the ward id
   * @returns {Observable<Array<Patient>>} a patients list
   */
  public getUserPlaylists(userId: number): Observable<Array<Playlist>> {
      return this.http.get(UserPlaylistsDataService.USER_PLAYLISTS_URL.replace('{userId}', '' + userId))
          .pipe(map((response: any) => response.data))
          .pipe(map(result => this.mapToPlaylists(result)))
          .pipe(catchError(this.handleError));
  }

  private mapToPlaylists(playlistsData: any): Array<Playlist> {
      let playlists: Array<Playlist> = [];
      for (let playlistData of playlistsData) {
          let playlist: Playlist = {
            id: playlistData.id,
            title : playlistData.title,
            cover : playlistData.picture
          }
          playlists.push(playlist);
      }
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
