import { newSpecPage } from '@stencil/core/testing';
import { PlzShowcaseRender } from '../plz-showcase-render';

describe('plz-showcase-render', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzShowcaseRender],
      html: `<plz-showcase-render></plz-showcase-render>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-showcase-render>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-showcase-render>
    `);
  });
});
