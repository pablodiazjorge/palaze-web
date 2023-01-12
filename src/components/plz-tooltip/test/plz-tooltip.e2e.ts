import { newE2EPage } from '@stencil/core/testing';

describe('plz-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-tooltip></plz-tooltip>');

    const element = await page.find('plz-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
