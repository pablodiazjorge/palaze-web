import { newE2EPage } from '@stencil/core/testing';

describe('plz-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-header></plz-header>');

    const element = await page.find('plz-header');
    expect(element).toHaveClass('hydrated');
  });
});
