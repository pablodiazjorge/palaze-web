import { newE2EPage } from '@stencil/core/testing';

describe('plz-hero-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-hero-logo></plz-hero-logo>');

    const element = await page.find('plz-hero-logo');
    expect(element).toHaveClass('hydrated');
  });
});
