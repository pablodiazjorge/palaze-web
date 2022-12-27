import { newE2EPage } from '@stencil/core/testing';

describe('plz-divider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-divider></plz-divider>');

    const element = await page.find('plz-divider');
    expect(element).toHaveClass('hydrated');
  });
});
