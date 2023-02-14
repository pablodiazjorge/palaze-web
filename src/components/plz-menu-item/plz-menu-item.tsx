import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'plz-menu-item',
  styleUrl: 'plz-menu-item.css',
  shadow: true,
})
export class PlzMenuItem {

  render() {
    return (
      <Host>
        <li>
          <slot></slot>
        </li>
      </Host>
    );
  }
}
