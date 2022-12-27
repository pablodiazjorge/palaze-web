import { newSpecPage } from '@stencil/core/testing';
import { PlzShowcase } from '../plz-showcase';

describe('plz-showcase', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzShowcase],
      html: `<plz-showcase></plz-showcase>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-showcase>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-showcase>
    `);
  });
});
