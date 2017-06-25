import { browser, element, by } from 'protractor';

describe('Sobre', () => {
  beforeEach(() => {
    browser.get('');
    element(by.css('page-home > ion-header > ion-navbar > ion-buttons > button')).click();
    browser.driver.sleep(500);
    element(by.xpath('//ion-popover//page-menu/ion-list/button')).click();

    // Wait for the page transition
    browser.driver.sleep(1000);
  });

  it('Deve navegar para a página sobre o projeto', () => {
    expect(browser.getTitle()).toEqual('Sobre o projeto');
  });

  it('Deve abrir o link do projeto no github', () => {
    element(by.xpath('//page-sobre/ion-content//*[contains(@class, "btn-saiba-mais")]')).click();
    browser.driver.sleep(2000); // wait for the animation
    expect(browser.driver.getCurrentUrl()).toMatch(/\/RodolfoSilva\/DevryCalc/i);
  });

  it('Deve abrir o link para a página de contribuição do projeto no github', () => {
    element(by.xpath('//page-sobre/ion-content//*[contains(@class, "btn-quero-contribuir")]')).click();
    browser.driver.sleep(2000); // wait for the animation
    expect(browser.driver.getCurrentUrl()).toMatch(/\/RodolfoSilva\/DeVryCalc\/wiki\/Quero-contribuir/i);
  });
});
