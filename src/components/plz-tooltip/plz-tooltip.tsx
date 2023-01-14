import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-tooltip',
  styleUrl: 'plz-tooltip.css',
  shadow: true,
})
export class PlzTooltip {
  @Prop() data: string = '';
  @Prop() link: string = '';

  render() {
    return (
      <div class="container">
        <slot></slot>
        <div class="tooltip">Example text</div>
      </div>
    );
  }
}
