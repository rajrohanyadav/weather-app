import { WeatherAppPage } from './app.po';

describe('weather-app App', () => {
  let page: WeatherAppPage;

  beforeEach(() => {
    page = new WeatherAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
