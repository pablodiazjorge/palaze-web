import { newSpecPage } from '@stencil/core/testing';
import { PlzHeroContent } from '../plz-hero-content';

describe('plz-hero-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzHeroContent],
      html: `<plz-hero-content></plz-hero-content>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-hero-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-hero-content>
    `);
  });
});
