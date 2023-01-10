import { Component, h } from '@stencil/core';

@Component({
  tag: 'plz-hero-content',
  styleUrl: 'plz-hero-content.css',
  shadow: true,
})
export class PlzHeroContent {

  render() {
    return (
      <div class="content">
        <slot></slot>
      </div>
    );
  }

}
