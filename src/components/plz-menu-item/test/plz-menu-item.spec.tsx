import { newSpecPage } from '@stencil/core/testing';
import { PlzMenuItem } from '../plz-menu-item';

describe('plz-menu-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzMenuItem],
      html: `<plz-menu-item></plz-menu-item>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-menu-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-menu-item>
    `);
  });
});
