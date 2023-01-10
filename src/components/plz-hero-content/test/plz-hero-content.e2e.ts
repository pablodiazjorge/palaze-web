import { newE2EPage } from '@stencil/core/testing';

describe('plz-hero-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-hero-content></plz-hero-content>');

    const element = await page.find('plz-hero-content');
    expect(element).toHaveClass('hydrated');
  });
});
