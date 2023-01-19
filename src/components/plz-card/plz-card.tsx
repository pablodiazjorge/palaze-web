import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-card',
  styleUrl: 'plz-card.css',
  shadow: true,
})
export class PlzCard {
  @Prop() variant: string = 'default';
  @Prop() url: string = '#';

  render() {
    return (
      <div class={`card ${this.variant}`}>
        <a href={this.url}>
          <div>
            <slot name="image"></slot>
          </div>
          <div>
            <slot name="content"></slot>
          </div>
        </a>
      </div>
    );
  }
}
