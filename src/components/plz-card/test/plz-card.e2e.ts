import { newE2EPage } from '@stencil/core/testing';

describe('plz-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-card></plz-card>');

    const element = await page.find('plz-card');
    expect(element).toHaveClass('hydrated');
  });
});
