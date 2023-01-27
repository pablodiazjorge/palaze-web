import { newE2EPage } from '@stencil/core/testing';

describe('plz-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-slider></plz-slider>');

    const element = await page.find('plz-slider');
    expect(element).toHaveClass('hydrated');
  });
});
