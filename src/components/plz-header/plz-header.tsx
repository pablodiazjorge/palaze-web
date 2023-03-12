import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-header',
  styleUrl: 'plz-header.css',
  shadow: true,
})
export class PlzHeader {
  @Prop() variant: string = 'right';
  @Prop() color: string = 'white';
  @Prop() colorText = 'black';
  @Prop() colorHover: string = '';
  @Prop() colorTextHover: string= ''

  render() {
    return this.variant == 'right' ? (
      <Host>
        <header class="header" style={{ '--color': `${this.color}`, '--color-text': `${this.colorText}`, '--color-hover': `${this.colorHover}`, '--color-text-hover': `${this.colorTextHover}`}}>
          <nav class="left">
            <slot name="left"></slot>
          </nav>
          <nav class="right">
            <slot name="right"></slot>
          </nav>
        </header>
      </Host>
    ) : this.variant == 'left' ? (
      <Host>
        <header class="header" style={{ '--color': `${this.color}`, '--color-text': `${this.colorText}`, '--color-hover': `${this.colorHover}`, '--color-text-hover': `${this.colorTextHover}`}}>
          <nav class="left">
            <slot name="left"></slot>
          </nav>
          <nav class="right">
            <slot name="right"></slot>
          </nav>
        </header>
      </Host>
    ) : null;
  }
}
