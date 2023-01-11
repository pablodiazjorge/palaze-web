import { newE2EPage } from '@stencil/core/testing';

describe('plz-data-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-data-table></plz-data-table>');

    const element = await page.find('plz-data-table');
    expect(element).toHaveClass('hydrated');
  });
});
