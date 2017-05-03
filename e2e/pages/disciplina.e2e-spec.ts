import { browser, element, by } from 'protractor';

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
    let disciplina = element(by.xpath(`//*[@id="disciplinaForm"]/ion-list//input[@name="titulo"]`));
    disciplina.sendKeys();
    disciplina.click();
    element(by.css('body')).click();
    let elem = element(by.css(`#disciplinaForm > ion-list > .form-errors:nth-child(2)`));
    expect(elem.isDisplayed()).toBeTruthy();
    expect(elem.getText()).toContain('Insira o nome da disciplina');
  });

  it('Validação das notas do formulário', () => {
    [1, 2, 3].forEach((i) => {
      element(by.xpath(`//*[@id="disciplinaForm"]/ion-list//input[@name="ap${i}"]`)).sendKeys(25);
      let elem = element(by.xpath(`//*[@id="disciplinaForm"]/ion-list//*[contains(@class, 'form-errors')][${i+1}]`));
      expect(elem.isDisplayed()).toBeTruthy();
      expect(elem.getText()).toContain('Nota inválida, insira uma nota entre 0.1 e 10');
    });
  });

  it('Deve cadastrar uma disciplina', () => {

    let disciplina = element(by.xpath(`//*[@id="disciplinaForm"]/ion-list//input[@name="titulo"]`));
    disciplina.sendKeys('Disciplina teste');

    [1, 2, 3].forEach((i) => {
      element(by.xpath(`//*[@id="disciplinaForm"]/ion-list//input[@name="ap${i}"]`)).sendKeys(5);
    });

    element(by.xpath(`//page-disciplina/ion-header/ion-navbar/ion-buttons/button[last()]`)).click();
    browser.driver.sleep(1000);
    let card = element(by.xpath(`//page-home/ion-content//ion-card[1]`));
    expect(card.element(by.xpath(`//ion-card-header/h1`)).getText()).toContain('Disciplina teste');
    expect(card.element(by.xpath(`//ion-card-content/div/div`)).getText()).toContain('5');
    expect(card.element(by.xpath(`//ion-row/ion-col[1]/nota/div`)).getText()).toContain('5');
    expect(card.element(by.xpath(`//ion-row/ion-col[2]/nota/div`)).getText()).toContain('5');
    expect(card.element(by.xpath(`//ion-row/ion-col[3]/nota/div`)).getText()).toContain('5');
  });
});


