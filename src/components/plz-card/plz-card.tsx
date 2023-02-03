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

  render() {
    return (
      <a class={`a-${this.variant + ' ' + 'glow-' + this.hover}`} href={this.url}>
        <div class={`card-${this.variant}`}>
          <div class={`image-container-${this.variant}`} style={{ 'background-image': `url(${this.image})` }}></div>
          <div class={`text-container-${this.variant}`}>
            <slot></slot>
          </div>
        </div>
      </a>
    );
  }
}
