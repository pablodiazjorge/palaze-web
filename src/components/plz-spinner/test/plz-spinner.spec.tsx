import { newSpecPage } from '@stencil/core/testing';
import { PlzSpinner } from '../plz-spinner';

describe('plz-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzSpinner],
      html: `<plz-spinner></plz-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-spinner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-spinner>
    `);
  });
});
