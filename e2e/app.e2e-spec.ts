import { EsksisAngularPage } from './app.po';

describe('esksis-angular App', () => {
  let page: EsksisAngularPage;

  beforeEach(() => {
    page = new EsksisAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
