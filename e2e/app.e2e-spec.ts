import { VklikedpostsPage } from './app.po';

describe('vklikedposts App', () => {
  let page: VklikedpostsPage;

  beforeEach(() => {
    page = new VklikedpostsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
