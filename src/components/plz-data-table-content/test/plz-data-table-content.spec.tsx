import { newSpecPage } from '@stencil/core/testing';
import { PlzDataTableContent } from '../plz-data-table-content';

describe('plz-data-table-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzDataTableContent],
      html: `<plz-data-table-content></plz-data-table-content>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-data-table-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-data-table-content>
    `);
  });
});
