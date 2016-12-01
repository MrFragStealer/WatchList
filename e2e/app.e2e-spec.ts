import { WatchListPage } from './app.po';

describe('watch-list App', function() {
  let page: WatchListPage;

  beforeEach(() => {
    page = new WatchListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
