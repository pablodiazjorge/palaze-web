import { newSpecPage } from '@stencil/core/testing';
import { PlzCard } from '../plz-card';

describe('plz-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzCard],
      html: `<plz-card></plz-card>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-card>
    `);
  });
});
