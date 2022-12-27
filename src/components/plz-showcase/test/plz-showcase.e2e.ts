import { newE2EPage } from '@stencil/core/testing';

describe('plz-showcase', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-showcase></plz-showcase>');

    const element = await page.find('plz-showcase');
    expect(element).toHaveClass('hydrated');
  });
});
