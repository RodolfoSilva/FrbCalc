import { browser } from 'protractor';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle(): any {
    return browser.getTitle();
  }

  getCurrentUrl(): any {
    return browser.getCurrentUrl();
  }

  sleep(ms: number) {
    browser.driver.sleep(ms);
  }

}
