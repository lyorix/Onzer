import {TestBed} from '@angular/core/testing';

import {PlaylistInformationDataService} from './playlist-information-data.service';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('PlaylistInformationService', () => {

  let service: PlaylistInformationDataService;
  let httpMock: HttpTestingController;

  const mockedRequestURI = '/deezer/playlist/1';
  const mockedPlaylistInfoWithoutTrack = {
    id: 1,
    title: 'some_title',
    picture: 'some_picture',
    duration: 100,
    creator: {
      name: 'some_artist'
    }
  };
  const mockedPlaylistInfoWithTracks = {
    id: 1,
    title: 'some_title',
    picture: 'some_picture',
    duration: 100,
    creator: {
      name: 'some_artist'
    },
    tracks: {
      data: [
        {
          title: 'some_track_title',
          duration: 200,
          artist: {
            name: 'some_track_artist'
          }
        }
      ]
    }
  };

  ///////////////////////////////////////
  //    INITIALIZATION
  ///////////////////////////////////////

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlaylistInformationDataService]
    });
    service = TestBed.get(PlaylistInformationDataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  ///////////////////////////////////////
  //    TESTS
  ///////////////////////////////////////

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return playlist info without track', (done) => {
    service.getPlaylist(1).subscribe((res: any) => {
      expect(res.title).toBe('some_title');
      expect(res.cover).toBe('some_picture');
      expect(res.duration).toBe(100000);
      expect(res.author).toBe('some_artist');
      expect(res.tracks).toBeUndefined();
      done();
    });
    const request = httpMock.expectOne(mockedRequestURI);
    request.flush(
      mockedPlaylistInfoWithoutTrack
    );
    httpMock.verify();
  });

  it('should return playlist info with tracks', (done) => {
    service.getPlaylist(1).subscribe((res: any) => {
      expect(res.title).toBe('some_title');
      expect(res.cover).toBe('some_picture');
      expect(res.duration).toBe(100000);
      expect(res.author).toBe('some_artist');
      expect(res.tracks.length).toBe(1);
      expect(res.tracks[0].title).toBe('some_track_title');
      expect(res.tracks[0].artist).toBe('some_track_artist');
      expect(res.tracks[0].duration).toBe(200000);
      done();
    });
    const request = httpMock.expectOne(mockedRequestURI);
    request.flush(
      mockedPlaylistInfoWithTracks
    );
    httpMock.verify();
  });

  it('should return error message when request failed', (done) => {
    service.getPlaylist(1).subscribe((res) => {
    }, (err) => {
      expect(err).toBeDefined();
      done();
    });
    const request = httpMock.expectOne(mockedRequestURI);
    request.error(new ErrorEvent('error'));
    httpMock.verify();
  });

});
