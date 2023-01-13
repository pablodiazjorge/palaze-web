import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-tooltip',
  styleUrl: 'plz-tooltip.css',
  shadow: true,
})
export class PlzTooltip {
  @Prop() data: string = 'Prueba';

  render() {
    return (
      <div class="tooltip" data-tool={this.data}>
        <slot></slot>
      </div>
    );
  }
}
