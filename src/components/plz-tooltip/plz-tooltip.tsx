import { Component, h } from '@stencil/core';

@Component({
  tag: 'plz-tooltip',
  styleUrl: 'plz-tooltip.css',
  shadow: true,
})
export class PlzTooltip {
  render() {
    return (
      <div class="container">
        <slot></slot>
        <div class="tooltip"><slot name='tooltip'></slot></div>
      </div>
    );
  }
}
