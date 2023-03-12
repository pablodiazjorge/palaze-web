import { newSpecPage } from '@stencil/core/testing';
import { PlzHeader } from '../plz-header';

describe('plz-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzHeader],
      html: `<plz-header></plz-header>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-header>
    `);
  });
});
