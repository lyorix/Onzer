import { TestBed } from '@angular/core/testing';

import { UserPlaylistsDataService } from './user-playlists-data.service';

describe('UserPlaylistsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserPlaylistsDataService = TestBed.get(UserPlaylistsDataService);
    expect(service).toBeTruthy();
  });
});
