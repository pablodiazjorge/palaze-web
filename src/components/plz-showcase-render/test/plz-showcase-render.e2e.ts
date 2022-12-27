import { newE2EPage } from '@stencil/core/testing';

describe('plz-showcase-render', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-showcase-render></plz-showcase-render>');

    const element = await page.find('plz-showcase-render');
    expect(element).toHaveClass('hydrated');
  });
});
