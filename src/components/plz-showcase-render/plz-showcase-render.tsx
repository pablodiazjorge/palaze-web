import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'plz-showcase-render',
  styleUrl: 'plz-showcase-render.css',
  shadow: true,
})
export class PlzShowcaseRender {

  render() {
    return (
      <Host>
        <div>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
