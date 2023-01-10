import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'plz-hero-content',
  styleUrl: 'plz-hero-content.css',
  shadow: true,
})
export class PlzHeroContent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
