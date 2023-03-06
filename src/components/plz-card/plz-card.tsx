import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-card',
  styleUrl: 'plz-card.css',
  shadow: true,
})
export class PlzCard {
  @Prop() variant: string = 'default';
  @Prop() url: string = '#';
  @Prop() image: string = '';
  @Prop() hover: string = 'blue';
  @Prop() width: string = '220';

  render() {
    return this.variant == 'default' ? (
      <a class={`a-${this.variant + ' ' + 'glow-' + this.hover}`} href={this.url}>
        <div>
          <div class={`image-container-${this.variant}`} style={{ 'background-image': `url(${this.image})`,'width': `${this.width}px` }}></div>
          <div class={`text-container-${this.variant}`} style= {{'width': `${this.width}px`}}>
            <slot></slot>
          </div>
        </div>
      </a>
    ) : this.variant == 'simple' ? (
      <div class={`card-${this.variant}`}>
        <slot></slot>
      </div>
    ) : this.variant == 'header' ? (
      <div>
        <div class={`card-${this.variant} header-top`}>
          <slot name="header-content"></slot>
        </div>
        <div class={`card-${this.variant} header-bottom`}>
          <slot name="content"></slot>
        </div>
      </div>
    ) : this.variant == 'footer' ? (
      <div>
        <div class={`card-${this.variant} footer-top`}>
          <slot name="content"></slot>
        </div>
        <div class={`card-${this.variant} footer-bottom`}>
          <slot name="footer-content"></slot>
        </div>
      </div>
    ) : this.variant == 'image' ? (
      <div>
        <div class={`container-${this.variant}`} style={{ 'background-image': `url(${this.image})` }}><slot></slot></div>
      </div>
    ) : null;
  }
}
