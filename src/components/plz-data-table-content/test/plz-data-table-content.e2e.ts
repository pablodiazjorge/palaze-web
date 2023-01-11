import { newE2EPage } from '@stencil/core/testing';

describe('plz-data-table-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-data-table-content></plz-data-table-content>');

    const element = await page.find('plz-data-table-content');
    expect(element).toHaveClass('hydrated');
  });
});
