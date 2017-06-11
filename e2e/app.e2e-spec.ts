import { YuewuPage } from './app.po';

describe('yuewu App', () => {
  let page: YuewuPage;

  beforeEach(() => {
    page = new YuewuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
