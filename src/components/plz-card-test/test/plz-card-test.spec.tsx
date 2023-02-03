import { newSpecPage } from '@stencil/core/testing';
import { PlzCardTest } from '../plz-card-test';

describe('plz-card-test', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzCardTest],
      html: `<plz-card-test></plz-card-test>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-card-test>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-card-test>
    `);
  });
});
