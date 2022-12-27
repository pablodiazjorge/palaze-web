import { newSpecPage } from '@stencil/core/testing';
import { PlzDivider } from '../plz-divider';

describe('plz-divider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzDivider],
      html: `<plz-divider></plz-divider>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-divider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-divider>
    `);
  });
});
