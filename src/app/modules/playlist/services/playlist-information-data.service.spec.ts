import { TestBed } from '@angular/core/testing';

import { PlaylistInformationDataService } from './playlist-information-data.service';

import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';

describe('PlaylistInformationService', () => {

  let service: PlaylistInformationDataService; 
  let httpMock: HttpTestingController; 

  const mockedRequestURI = '/deezer/playlist/1';
  const mockedPlaylistInfo = {
    id: 1,
    title: 'some_title',
    picture: 'some_picture',
    duration: 100,
    creator: {
      name: 'some_artist'
    }
  };

  ///////////////////////////////////////
  //    INITIALIZATION
  ///////////////////////////////////////

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      imports: [ HttpClientTestingModule ], 
      providers: [ PlaylistInformationDataService ] 
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

  it('should return playlist info', (done) => { 
    service.getPlaylist(1).subscribe((res: any) => { 
      expect(res.title).toBe('some_title');
      expect(res.cover).toBe('some_picture');
      expect(res.duration).toBe(100000);
      expect(res.author).toBe('some_artist');
      done();
    });
    const request = httpMock.expectOne(mockedRequestURI); 
    request.flush(
      mockedPlaylistInfo
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
