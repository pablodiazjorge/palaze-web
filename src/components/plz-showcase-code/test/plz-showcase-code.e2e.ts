import { newE2EPage } from '@stencil/core/testing';

describe('plz-showcase-code', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-showcase-code></plz-showcase-code>');

    const element = await page.find('plz-showcase-code');
    expect(element).toHaveClass('hydrated');
  });
});
