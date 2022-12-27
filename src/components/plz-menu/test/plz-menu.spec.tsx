import { newSpecPage } from '@stencil/core/testing';
import { PlzMenu } from '../plz-menu';

describe('plz-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzMenu],
      html: `<plz-menu></plz-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-menu>
    `);
  });
});
