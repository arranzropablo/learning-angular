import { OtherPage } from './app.po';

describe('other App', () => {
  let page: OtherPage;

  beforeEach(() => {
    page = new OtherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
