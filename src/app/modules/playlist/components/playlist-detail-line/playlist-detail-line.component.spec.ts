import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistDetailLineComponent } from './playlist-detail-line.component';

describe('PlaylistDetailLineComponent', () => {
  let component: PlaylistDetailLineComponent;
  let fixture: ComponentFixture<PlaylistDetailLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistDetailLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistDetailLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
