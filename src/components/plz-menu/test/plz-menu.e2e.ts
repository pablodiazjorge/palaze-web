import { newE2EPage } from '@stencil/core/testing';

describe('plz-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-menu></plz-menu>');

    const element = await page.find('plz-menu');
    expect(element).toHaveClass('hydrated');
  });
});
