import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'plz-tooltip',
  styleUrl: 'plz-tooltip.css',
  shadow: true,
})
export class PlzTooltip {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
