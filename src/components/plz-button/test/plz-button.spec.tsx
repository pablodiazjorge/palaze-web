import { newSpecPage } from '@stencil/core/testing';
import { PlzButton } from '../plz-button';

describe('plz-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzButton],
      html: `<plz-button></plz-button>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-button>
    `);
  });
});
