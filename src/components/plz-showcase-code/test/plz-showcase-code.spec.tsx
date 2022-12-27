import { newSpecPage } from '@stencil/core/testing';
import { PlzShowcaseCode } from '../plz-showcase-code';

describe('plz-showcase-code', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzShowcaseCode],
      html: `<plz-showcase-code></plz-showcase-code>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-showcase-code>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-showcase-code>
    `);
  });
});
