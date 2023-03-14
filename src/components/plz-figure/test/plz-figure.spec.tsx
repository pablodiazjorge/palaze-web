import { newSpecPage } from '@stencil/core/testing';
import { PlzFigure } from '../plz-figure';

describe('plz-figure', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzFigure],
      html: `<plz-figure></plz-figure>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-figure>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-figure>
    `);
  });
});
