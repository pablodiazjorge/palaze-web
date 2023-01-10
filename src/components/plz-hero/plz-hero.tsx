import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'plz-hero',
  styleUrl: 'plz-hero.css',
  shadow: true,
})
export class PlzHero {

  render() {
    return (
      <Host>
        <div class="hero grid">
          <div class="logo-palaze">
            <slot></slot>
          </div>
          <div class="small-content">
            <slot></slot>
          </div>

        </div>
      </Host>
    );
  }

}
