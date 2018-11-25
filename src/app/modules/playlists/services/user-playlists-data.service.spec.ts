import { TestBed } from '@angular/core/testing';

import { UserPlaylistsDataService } from './user-playlists-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserPlaylistsService', () => {

  let service: UserPlaylistsDataService; 
  let httpMock: HttpTestingController;

  const mockedRequestURI = '/deezer/user/5/playlists';
  const mockedPlaylists = [{
    id: 1,
    title: 'some_title',
    picture_medium: 'some_picture'
  },
  {
    id: 2,
    title: 'some_other_title',
    picture_medium: 'some_other_picture'
  }];

  ///////////////////////////////////////
  //    INITIALIZATION
  ///////////////////////////////////////

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      imports: [ HttpClientTestingModule ], 
      providers: [ UserPlaylistsDataService ] 
    }); 
    service = TestBed.get(UserPlaylistsDataService); 
    httpMock = TestBed.get(HttpTestingController);
  });

  ///////////////////////////////////////
  //    TESTS
  ///////////////////////////////////////

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return two playlists', (done) => { 
    service.getUserPlaylists(5).subscribe((res: any) => { 
      expect(res.length).toBe(2);
      expect(res[0].id).toBe(1);
      expect(res[0].title).toBe('some_title');
      expect(res[0].cover).toBe('some_picture');
      expect(res[1].id).toBe(2);
      expect(res[1].title).toBe('some_other_title');
      expect(res[1].cover).toBe('some_other_picture');
      done();
    });
    const request = httpMock.expectOne(mockedRequestURI); 
    request.flush({
      data: mockedPlaylists
    });
    httpMock.verify(); 
  });

  it('should return no playlists', (done) => { 
    service.getUserPlaylists(5).subscribe((res: any) => { 
      expect(res.length).toBe(0);
      done();
    });
    const request = httpMock.expectOne(mockedRequestURI); 
    request.flush({
      data: []
    });
    httpMock.verify(); 
  });

  it('should return error message when request failed', (done) => { 
    service.getUserPlaylists(5).subscribe((res) => {
    }, (err) => {
      expect(err).toBeDefined();
      done();
    });
    const request = httpMock.expectOne(mockedRequestURI); 
    request.error(new ErrorEvent('error'));
    httpMock.verify(); 
  });

});
