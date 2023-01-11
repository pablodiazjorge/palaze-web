import { newSpecPage } from '@stencil/core/testing';
import { PlzDataTable } from '../plz-data-table';

describe('plz-data-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzDataTable],
      html: `<plz-data-table></plz-data-table>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-data-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-data-table>
    `);
  });
});
