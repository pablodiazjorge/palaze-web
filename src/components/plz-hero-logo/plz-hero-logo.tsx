import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'plz-hero-logo',
  styleUrl: 'plz-hero-logo.css',
  shadow: true,
})
export class PlzHeroLogo {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
