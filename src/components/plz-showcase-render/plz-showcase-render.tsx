import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-showcase-render',
  styleUrl: 'plz-showcase-render.css',
  shadow: true,
})
export class PlzShowcaseRender {
  @Prop() display: string = 'inline-flex';

  render() {
    return (
      <Host>
        <div class={this.display}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
