import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path) {
    return browser.get(path);
  }

  ///////////////////////////////////////
  //    USER PLAYLISTS
  ///////////////////////////////////////

  getPlaylistsViewCount() {
    return element.all(by.css('.plsts-view')).count();
  }

  getPlaylistCardCount() {
    return element.all(by.css('.plst-card')).count();
  }

  selectPlaylist() {
    element.all(by.css('.plst-card__cover')).get(0).click();
  }

  ///////////////////////////////////////
  //    PLAYLIST
  ///////////////////////////////////////

  getPlaylistViewCount() {
    return element.all(by.css('.plst-view')).count();
  }

  navigateBack() {
    element.all(by.css('.header__back')).get(0).click();
  }

}
