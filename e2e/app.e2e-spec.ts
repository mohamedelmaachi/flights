import { BackPage } from './app.po';

describe('back App', () => {
  let page: BackPage;

  beforeEach(() => {
    page = new BackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
