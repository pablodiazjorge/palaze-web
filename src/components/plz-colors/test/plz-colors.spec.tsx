import { newSpecPage } from '@stencil/core/testing';
import { PlzColors } from '../plz-colors';

describe('plz-colors', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzColors],
      html: `<plz-colors></plz-colors>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-colors>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-colors>
    `);
  });
});
