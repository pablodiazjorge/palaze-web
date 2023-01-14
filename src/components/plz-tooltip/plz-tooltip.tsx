import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-tooltip',
  styleUrl: 'plz-tooltip.css',
  shadow: true,
})
export class PlzTooltip {

  @Prop() clase: string = 'tooltip';

  render() {
    return (
      <div class="container">
        <slot></slot>
        <div class={this.clase}><slot name='tooltip'></slot></div>
      </div>
    );
  }
}
