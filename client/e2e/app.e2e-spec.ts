import { VisaFormPage } from './app.po';

describe('visa-form App', () => {
  let page: VisaFormPage;

  beforeEach(() => {
    page = new VisaFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
