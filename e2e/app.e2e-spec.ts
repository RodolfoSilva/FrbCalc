import { browser, element, by } from 'protractor';

describe('DeVry Calc', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('Deve ter o titulo do aplicativo', () => {
    expect(browser.getTitle()).toEqual('Calculadora DeVry');
  });
})
