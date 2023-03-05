import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-tooltip',
  styleUrl: 'plz-tooltip.css',
  shadow: true,
})
export class PlzTooltip {
  @Prop() variant: string = 'default';
  @Prop() position: string = 'bottom';
  @Prop() adjust: string = '';

  render() {
    return this.adjust != '' && this.variant == 'default' ? (
      <div class="container">
        <slot></slot>
        <div class={`tooltip ${this.position} `} style={{ transform: `translate(-50%,${this.adjust}%` }}>
          <slot name="tooltip"></slot>
        </div>
      </div>
    ) : this.variant == 'default' ? (
      <div class="container">
        <slot></slot>
        <div class={`tooltip ${this.position} `}>
          <slot name="tooltip"></slot>
        </div>
      </div>
    ) : null;
  }
}
