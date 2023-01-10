import { newE2EPage } from '@stencil/core/testing';

describe('plz-hero', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-hero></plz-hero>');

    const element = await page.find('plz-hero');
    expect(element).toHaveClass('hydrated');
  });
});
