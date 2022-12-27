import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'plz-button',
  styleUrl: 'plz-button.css',
  shadow: true,
})
export class PlzButton {

  render() {
    return (
      <Host>
        <button>
          <slot></slot>
        </button>
      </Host>
    );
  }

}
