import { FamilinkAppPage } from './app.po';

describe('familink-app App', () => {
  let page: FamilinkAppPage;

  beforeEach(() => {
    page = new FamilinkAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
