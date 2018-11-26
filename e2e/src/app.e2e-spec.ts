import { AppPage } from './app.po';

describe('Application', () => {

  let page: AppPage;

  ///////////////////////////////////////
  //    INITIALIZATION
  ///////////////////////////////////////

  beforeEach(() => {
    page = new AppPage();
  });

  ///////////////////////////////////////
  //    TESTS
  ///////////////////////////////////////

  ///////////////////////////////////////
  //    USER PLAYLISTS
  ///////////////////////////////////////

  it('should display user playlists page', () => {
    page.navigateTo('/');
    expect(page.getPlaylistsViewCount()).toBe(1);
    page.navigateTo('/playlists');
    expect(page.getPlaylistsViewCount()).toBe(1);
  });

  ///////////////////////////////////////
  //    PLAYLIST
  ///////////////////////////////////////

  it('should display playlist page', () => {
    page.navigateTo('/playlist/5');
    expect(page.getPlaylistViewCount()).toBe(1);
  });

  it('should open selected playlist', () => {
    page.navigateTo('/');
    expect(page.getPlaylistsViewCount()).toBe(1);
    page.navigateTo('/playlists');
    expect(page.getPlaylistsViewCount()).toBe(1);
  });

});
