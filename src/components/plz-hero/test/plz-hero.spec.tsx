import { newSpecPage } from '@stencil/core/testing';
import { PlzHero } from '../plz-hero';

describe('plz-hero', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzHero],
      html: `<plz-hero></plz-hero>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-hero>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-hero>
    `);
  });
});
