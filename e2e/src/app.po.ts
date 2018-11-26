import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path) {
    return browser.get(path);
  }

  getPlaylistsViewCount() {
    return element.all(by.css('.plsts-view')).count();
  }

  getPlaylistViewCount() {
    return element.all(by.css('.plst-view')).count();
  }

  getPlaylistCardCount() {
    return element.all(by.css('.plst-card')).count();
  }

}
