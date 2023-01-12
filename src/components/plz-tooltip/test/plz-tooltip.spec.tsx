import { newSpecPage } from '@stencil/core/testing';
import { PlzTooltip } from '../plz-tooltip';

describe('plz-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzTooltip],
      html: `<plz-tooltip></plz-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-tooltip>
    `);
  });
});
