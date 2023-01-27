import { newSpecPage } from '@stencil/core/testing';
import { PlzSlider } from '../plz-slider';

describe('plz-slider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzSlider],
      html: `<plz-slider></plz-slider>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-slider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-slider>
    `);
  });
});
