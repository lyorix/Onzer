import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsContentComponent } from './playlists-content.component';

describe('PlaylistsContentComponent', () => {
  let component: PlaylistsContentComponent;
  let fixture: ComponentFixture<PlaylistsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
