import { newE2EPage } from '@stencil/core/testing';

describe('plz-menu-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-menu-item></plz-menu-item>');

    const element = await page.find('plz-menu-item');
    expect(element).toHaveClass('hydrated');
  });
});
