import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'plz-divider',
  styleUrl: 'plz-divider.css',
  shadow: true,
})
export class PlzDivider {

  render() {
    return (
      <Host>
        <hr class='divider'/>
      </Host>
    );
  }

}
