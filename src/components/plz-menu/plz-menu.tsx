import { Component, h } from '@stencil/core';

@Component({
  tag: 'plz-menu',
  styleUrl: 'plz-menu.css',
  shadow: true,
})
export class PlzMenu {

  render() {
    return (
      <ul class="content">
        <slot></slot>
      </ul>
    );
  }

}
