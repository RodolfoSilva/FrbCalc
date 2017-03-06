import { browser, element, by, ElementFinder } from 'protractor';

describe('Disciplina', () => {
  beforeEach(() => {
    browser.get('');
    element(by.css('page-home > ion-content ion-fab > button')).click();

    // Wait for the page transition
    browser.driver.sleep(1000);
  });

  it('Deve navegar para a página de disciplina', () => {
    expect(browser.getTitle()).toEqual('Disciplina');
  });

  it('Validação do nome da disciplina', () => {
    let disciplina = element(by.css(`#disciplinaForm > ion-list > ion-item:nth-child(1) > div.item-inner > div > ion-input > input`));
    disciplina.sendKeys();
    disciplina.click();
    element(by.css('body')).click();
    expect(element(by.css(`#disciplinaForm > ion-list > ion-item:nth-child(2)`)).isDisplayed()).toBeTruthy();
    expect(element(by.css(`#disciplinaForm > ion-list > ion-item:nth-child(2) > div.item-inner > div > ion-label > p`)).getText()).toContain('Insira o nome da disciplina');
  });

  it('Validação das notas do formulário', () => {
    [2, 4, 6].forEach((i) => {
      element(by.css(`#disciplinaForm > ion-list > ion-item:nth-child(${i}) > div.item-inner > div > ion-input > input`)).sendKeys(25);
      expect(element(by.css(`#disciplinaForm > ion-list > ion-item:nth-child(${i+1})`)).isDisplayed()).toBeTruthy();
      expect(element(by.css(`#disciplinaForm > ion-list > ion-item:nth-child(${i+1}) > div.item-inner > div > ion-label > p`)).getText()).toContain('Nota inválida, insira uma nota entre 0.1 e 10');
    });
  });
})
