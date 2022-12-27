import { newE2EPage } from '@stencil/core/testing';

describe('plz-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-button></plz-button>');

    const element = await page.find('plz-button');
    expect(element).toHaveClass('hydrated');
  });
});
