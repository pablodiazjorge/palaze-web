import { newE2EPage } from '@stencil/core/testing';

describe('plz-figure', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-figure></plz-figure>');

    const element = await page.find('plz-figure');
    expect(element).toHaveClass('hydrated');
  });
});
