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

  it('should display user playlists page', () => {
    page.navigateTo('/');
    expect(page.getPlaylistsViewCount()).toBe(1);
    page.navigateTo('/playlists');
    expect(page.getPlaylistsViewCount()).toBe(1);
  });

  it('should display playlist cards', () => {
    page.navigateTo('/');
    expect(page.getPlaylistCardCount()).toBe(25);
  });

  it('should open playlist from card', () => {
    page.navigateTo('/');
    page.selectPlaylist();
    expect(page.getPlaylistViewCount()).toBe(1);
  });

  it('should display playlist page from route', () => {
    page.navigateTo('/playlist/1');
    expect(page.getPlaylistViewCount()).toBe(1);
  });

  it('should open playlists from playlist back button', () => {
    page.navigateTo('/playlist/1');
    page.navigateBack();
    expect(page.getPlaylistsViewCount()).toBe(1);
  });

});
