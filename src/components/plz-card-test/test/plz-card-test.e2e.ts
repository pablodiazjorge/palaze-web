import { newE2EPage } from '@stencil/core/testing';

describe('plz-card-test', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-card-test></plz-card-test>');

    const element = await page.find('plz-card-test');
    expect(element).toHaveClass('hydrated');
  });
});
