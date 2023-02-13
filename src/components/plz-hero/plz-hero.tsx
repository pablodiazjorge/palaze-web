import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'plz-hero',
  styleUrl: 'plz-hero.css',
  shadow: true,
})
export class PlzHero {
  @Prop() variant: string = 'default';
  @Prop() height: string = '600';
  @Prop() image: string = '';

  render() {
    return this.variant == 'default' ? (
      <Host>
        <div class="hero-default" style={{ 'background-image': `url(${this.image})`, 'height': `${this.height}px` }}>
          <div class="hero-default-content">
            <slot></slot>
          </div>
        </div>
      </Host>
    ) : this.variant == 'simple' ? (
      <Host>
        <div class="simple" style={{ height: `${this.height}px` }}>
          <div class="simple-content">
            <slot></slot>
          </div>
        </div>
      </Host>
    ) : this.variant == 'image' ? (
      <Host>
        <div class="hero-default" style={{ 'background-image': `url(${this.image})`, 'height': `${this.height}px` }}></div>
      </Host>
    ) : this.variant == 'two-column' ? (
      <Host>
        <div class="hero-columns" style={{ 'background-image': `url(${this.image})`, 'height': `${this.height}px` }}>
          <div class="hero-columns-container">
            <div class="hero-columns-content">
              <slot name="first-column"></slot>
            </div>
            <div class="hero-columns-content">
              <slot name="second-column"></slot>
            </div>
          </div>
        </div>
      </Host>
    ) : null;
  }
}
