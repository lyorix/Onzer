import { TestBed } from '@angular/core/testing';

import { PlaylistTracksService } from './playlist-tracks.service';

describe('PlaylistTracksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaylistTracksService = TestBed.get(PlaylistTracksService);
    expect(service).toBeTruthy();
  });
});
