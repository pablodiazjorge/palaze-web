import { newSpecPage } from '@stencil/core/testing';
import { PlzHeroLogo } from '../plz-hero-logo';

describe('plz-hero-logo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzHeroLogo],
      html: `<plz-hero-logo></plz-hero-logo>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-hero-logo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-hero-logo>
    `);
  });
});
