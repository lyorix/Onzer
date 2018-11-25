import { TestBed } from '@angular/core/testing';

import { PlaylistInformationService } from './playlist-information-data.service';

describe('PlaylistInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaylistInformationService = TestBed.get(PlaylistInformationService);
    expect(service).toBeTruthy();
  });
});
