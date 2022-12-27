import { newE2EPage } from '@stencil/core/testing';

describe('plz-spinner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-spinner></plz-spinner>');

    const element = await page.find('plz-spinner');
    expect(element).toHaveClass('hydrated');
  });
});
