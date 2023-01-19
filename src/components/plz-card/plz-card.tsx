import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-card',
  styleUrl: 'plz-card.css',
  shadow: true,
})
export class PlzCard {
  @Prop() variant: string = 'default';
  @Prop() url: string = '#';
  @Prop() image: string = './assets/icon/pattern.png';

  render() {
    return (
      <a href={this.url}>
        <div class={`card-${this.variant}`}>
          <div class={`image-content-${this.variant}`}>
            <span class={`overlay-${this.variant}`} style={{'background-image': `url(${this.image})`}}>
            </span>
          </div>
          <div class={`card-content-${this.variant}`}>
            <slot></slot>
          </div>
        </div>
      </a>
    );
  }
}
