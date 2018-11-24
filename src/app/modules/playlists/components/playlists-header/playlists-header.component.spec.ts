import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsHeaderComponent } from './playlists-header.component';

describe('PlaylistsHeaderComponent', () => {
  let component: PlaylistsHeaderComponent;
  let fixture: ComponentFixture<PlaylistsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
