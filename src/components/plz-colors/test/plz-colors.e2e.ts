import { newE2EPage } from '@stencil/core/testing';

describe('plz-colors', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-colors></plz-colors>');

    const element = await page.find('plz-colors');
    expect(element).toHaveClass('hydrated');
  });
});
